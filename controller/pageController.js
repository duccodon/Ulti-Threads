const controller = {};
const models = require("../models");

const bcrypt = require('bcrypt'); // Ensure password security
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

//const models = require('../models');
//const { Op } = require('sequelize')

// controller.init = async(req, res, next) => {
//     res.locals.categories = await models.Category.findAll({
//         include: [{model: models.Blog}],
//     });
//     res.locals.tags = await models.Tag.findAll();
//     next();
// }

// controller.showList = async(req, res) => {
//     let limit = 2; //blogs limit
//     let { category = 0, tag = 0, keyword = "", page = 1} = req.query;
//     category = isNaN(category) ? 0 : parseInt(category);
//     tag = isNaN(tag) ? 0: parseInt(tag);
//     page = isNaN(page) ? 1 : parseInt(page);
//     let offset = (page - 1) * limit;

//     let options = {
//         include: [{ model: models.Comment}],
//         where: {},
//     };

//     if (category) {
//         options.where.categoryId = category;
//     }

//     if (tag) {
//         options.include.push({model: models.Tag, where: {id: tag}})
//     }

//     //search
//     if (keyword.trim() != ""){
//         options.where[Op.or] = {
//             title: { [Op.iLike]: `%${keyword.trim()}%`},
//             summary: { [Op.iLike]: `%${keyword.trim()}%`},
//         }
//     }

//     //pagination
//     let totalRows = await models.Blog.count({
//         ...options, 
//         distinct: true,
//         col: "id",
//     });
//     res.locals.pagination = {
//         page,
//         limit,
//         totalRows,
//         queryParams: req.query,
//     };

//     let blogs = await models.Blog.findAll({...options, limit, offset});
//     res.locals.blogs = blogs;
//     res.render("index");
// }

// controller.showDetails = async(req, res) => {
//     let id = isNaN(req.params.id) ? 0 : parseInt(req.params.id);
//     res.locals.blog = await models.Blog.findOne({
//         where: {id},
//         include: [
//             {model: models.Comment},
//             {model: models.User},
//             {model: models.Category},
//             {model: models.Tag},
//         ]
//     })
//     res.render("details");
// }

controller.showHomepage = async (req, res) => {
    const userId = req.session.userId;
    console.log("User ID:", userId);

    res.locals.currentUser = await models.User.findByPk(userId, (err, user) => {
      if (err) {
        return res.status(500).send('Error retrieving user information');
      }
    });
    res.locals.threads = await models.Thread.findAll({
        include: [
            {model: models.User},
            {model: models.Media},
        ],
      });
    res.render("homepage", {headerName: "Home", page: 1});
};

controller.showSearch = async (req, res) => {
  res.locals.users = await models.User.findAll();
  res.render("search", {headerName: "Search", page: 2});
}

controller.showActivity = async(req, res) => {
  const userId = req.session.userId;
  res.locals.notifications = await models.Notification.findAll({
    include: [
      {
        model: models.User,
        as: 'transfererFk', // Specify alias for transferer_id
      },
    ],
    where: { receiver_id: userId },
  });
  res.render("activity", {headerName: "Activity", page: 3});
}

controller.showProfile = async (req, res) => {

    const userId = req.session.userId;

    res.locals.currentUser = await models.User.findByPk(userId, (err, user) => {
      if (err) {
        return res.status(500).send('Error retrieving user information');
      }
    });

    res.locals.follower = await models.Follower.findAll({
      where: { following_id: userId },
      include: [
        {model: models.User, as: 'followerFk'},
      ]
    });

    res.locals.threads = await models.Thread.findAll({
      attributes: ['id', 'user_id', 'content', 'createdAt'],
      where: {
        user_id: userId
      },
      include: [
        {
          model: models.User,
          required: false, // This performs an LEFT JOIN
        },
        {model: models.Media},
      ]
    });
    const isCurrentUser = true;
    res.locals.isCurrentUser = isCurrentUser;
    res.render("profile", {headerName: "Profile", page: 4});
}

controller.showIDProfile = async (req, res) => {
  const loginId = req.session.userId;
  const userId = req.params.id;

  res.locals.currentUser = await models.User.findByPk(userId, (err, user) => {
    if (err) {
      return res.status(500).send('Error retrieving user information');
    }
  });

  res.locals.follower = await models.Follower.findAll({
    where: { following_id: userId },
    include: [
      {model: models.User, as: 'followerFk'},
    ]
  });

  res.locals.threads = await models.Thread.findAll({
    attributes: ['id', 'user_id', 'content', 'createdAt'],
    where: {
      user_id: userId
    },
    include: [
      {
        model: models.User,
        required: false, // This performs an LEFT JOIN
      },
      {model: models.Media},
    ]
  });

  // Check if the logged-in user is following the current user
  const isFollowed = await models.Follower.findOne({
      where: {
          follower_id: loginId,
          following_id: userId,
      }
  });
  res.locals.isFollowed = isFollowed ? true : false;  // If a follow record exists, mark as followed
  console.log(isFollowed);

  const isCurrentUser = false;
  res.locals.isCurrentUser = isCurrentUser;

  res.render("profile", {headerName: "Profile", page: 4});
}

// Function to follow a user (POST)
controller.addFollower = async (req, res) => {
  const currentUserId = parseInt(req.session.userId);
  const targetUserId = parseInt(req.params.id);
  console.log("current:", currentUserId);
  console.log("target:", targetUserId);

  try {
    await models.Follower.create({
      follower_id: currentUserId,
      following_id: targetUserId,
    });
    res.status(200).send('Followed successfully');
  } catch (err) {
    res.status(500).send('Error following the user');
  }
};

// Function to unfollow a user (DELETE)
controller.deleteFollower = async (req, res) => {
  const currentUserId = parseInt(req.session.userId);
  const targetUserId = parseInt(req.params.id);

  try {
    const existingFollow = await models.Follower.findOne({
      where: {
        follower_id: currentUserId,
        following_id: targetUserId,
      },
    });

    if (!existingFollow) {
      return res.status(400).send('You are not following the user');
    }

    await existingFollow.destroy(); // Unfollow the user

    res.status(200).send('Unfollowed successfully');
  } catch (err) {
    res.status(500).send('Error unfollowing the user');
  }
};


controller.showAbout = async (req, res) => {

  const currentUserId = parseInt(req.session.userId);
  const userId = parseInt(req.params.id);
  const isCurrentUser = currentUserId === userId;

  res.locals.currentUser = await models.User.findByPk(userId, (err, user) => {
    if (err) {
      return res.status(500).send('Error retrieving user information');
    }
  });
  
  res.locals.isCurrentUser = isCurrentUser;
  res.render("about-overlay", {layout:false});
}

controller.showPostDetails = async (req, res) => {
    const postid = req.params.postid;

    const thread = await models.Thread.findOne({
      attributes: ['id', 'user_id', 'content', 'createdAt'],
      include: [
        {model: models.User},
        {model: models.Media},
        {model: models.Comment,
          include: [{model: models.User,
            attributes: ['username', 'profile_picture']
          }]
        },
      ],
      where: {
        id: postid
      }
    });

    console.log(thread);
    res.locals.thread = thread;
    res.render("post_details", {headerName: "Post", page: 5});
}

controller.showCommentOverlay = async (req, res) => {
  const postid = req.params.postid;
  const userId = req.session.userId;

  console.log("User ID:", userId);
  res.locals.currentUser = await models.User.findByPk(userId, (err, user) => {
    if (err) {
      return res.status(500).send('Error retrieving user information');
    }
  });

  const thread = await models.Thread.findOne({
    attributes: ['id', 'user_id', 'content', 'createdAt'],
    include: [
      {model: models.User},
      {model: models.Comment,
        include: [{model: models.User,
          attributes: ['username', 'profile_picture']
        }]
      },
      {model: models.Media},
    ],
    where: {
      id: postid
    }
  });

  console.log(thread);
  res.locals.thread = thread;
  res.render("comment-overlay", {layout:false});
}

controller.showLogin = (req, res) => {
  const errorMessage = req.flash('errorMessage');
  req.session.destroy(err => {
    if (err) {
      console.error('Failed to destroy session:', err);
    }
  });

  return res.render('login', {
    layout: 'account',
    title: 'Login',
    errorMessage,   
  });
}

controller.showCreate = (req, res) => {
    res.render("create", {layout: "account", title: 'Sign Up'});
}

const sendVerificationEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or any email service
    auth: {
      user: 'ducnguyentemp@gmail.com', // replace with your email
      pass: 'kcvs jqcq gfxr kjon',   // replace with your email password
    },
  });

  const verificationLink = `localhost:3000/CreateAccount/VerifyEmail?token=${verificationToken}`;

  const mailOptions = {
    from: 'ducnguyentemp@gmail.com',
    to: email,
    subject: 'Email Verification Link',
    html: `<p>Please click the link below to verify your email:</p><p><a href="localhost:3000/CreateAccount/VerifyEmail?token=${verificationToken}">Click here to verify your email</a></p><p>The verification link is: localhost:3000/CreateAccount/VerifyEmail?token=${verificationToken}</p>`,
  };

  await transporter.sendMail(mailOptions);
};

controller.addUser = async (req, res) => {
  const { email, phonenumber, username, password } = req.body;

  try {
    const existingEmail = await models.User.findOne({ where: { email } });
    if (existingEmail) {
      return res.render("create", {
        layout: "account",
        title: "Sign Up",
        errorMessage: `An account with this email: ${email} is already exists.`,
      });
    }

    const existingPhone = await models.User.findOne({ where: { phonenumber } });
    if (existingPhone) {
      return res.render("create", {
        layout: "account",
        title: "Sign Up",
        errorMessage: `An account with this phone number: ${phonenumber} is already exists.`,
      });
    }

    const existingUsername = await models.User.findOne({ where: { username } });
    if (existingUsername) {
      return res.render("create", {
        layout: "account",
        title: "Sign Up",
        errorMessage: `An account with this username: ${username} is already exists.`,
      });
    }

    const verificationToken = crypto.randomBytes(32).toString('hex');
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await models.User.create({
      email,
      phonenumber,
      username,
      password: hashedPassword,
      bio: "Not added yet",
      profile_picture: "/img/profile/defaultAvatar.jpeg",
      verificationToken,
      isVerified: false, 
    });

    await sendVerificationEmail(email, verificationToken);
    return res.render("create", {
      layout: "account",
      title: "Sign Up",
      errorMessage: "Account created successfully. Please check your email to verify your account.",
    });
  } catch (error) {
    console.error(error);
  }
};


/*controller.login = async (req, res) => {
  const { username, password } = req.body; // Get login credentials from the request body

  try {
    // Find the user by username or email
    const user = await models.User.findOne({
      where: {
        username: username, // Username is unique
      },
    });

    if (user.password !== password) {
      return res.render("login", {
        layout: "account",
        title: "Login",
        errorMessage: "Invalid username or password.",
      });
    }

    // Password is correct, redirect to Homepage
    return res.redirect("/Homepage");
  } catch (error) {
    console.error(error);
  }
};*/

controller.login = async (req, res) => {
  const { usernameOrEmail, password } = req.body; // Get login credentials from the request body
  try {
    // Check if the input is an email or username
    let user;
    if (usernameOrEmail.includes('@')) {
      // If it's an email (contains '@'), search by email
    user = await models.User.findOne({
        where: {
          email: usernameOrEmail,
        },
      });
    } 
    else {
      // If it's a username, search by username
      user = await models.User.findOne({
        where: {
          username: usernameOrEmail,
        },
      });
    }

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.render("login", {
        layout: "account",
        title: "Login",
        errorMessage: "Invalid username, email or password.",
      });
    }

    if (!user.isVerified) {
      return res.render("login", {
        layout: "account",
        title: "Login",
        errorMessage: "This account has not been verified. Please check your email.",
      });
    }

    // Password is correct, redirect to Homepage
    req.session.userId = user.id;
    return res.redirect("/Homepage");
  } catch (error) {
    console.error(error);
    res.status(500).render("login", {
      layout: "account",
      title: "Login",
      errorMessage: "An error occurred. Please try again later."
    });
  }
};




module.exports = controller;