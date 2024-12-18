const controller = {};
const models = require("../models");

const bcrypt = require('bcrypt'); // Ensure password security
const { Op, where } = require('sequelize');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { fn, col, literal } = require("sequelize");

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

controller.getUnreadNoti = async (req, res, next) => {
  const userId = req.session.userId;
  const notifications = await models.Notification.findAll({
    include: [
      {
        model: models.User,
        as: 'transfererFk', // Specify alias for transferer_id
      },
    ],
    where: { receiver_id: userId },
    order: [["id", "ASC"]],
  });
  res.locals.unreadNotiNum = notifications.filter(notification => !notification.is_read).length;
  next();
}

controller.showHomepage = async (req, res) => {
  const userId = req.session.userId;
  const { view } = req.query;

  res.locals.currentUser = await models.User.findByPk(userId, (err, user) => {
    if (err) {
      return res.status(500).send("Error retrieving user information");
    }
  });
  res.locals.loggingInUser = res.locals.currentUser;

  const likedThreadIds = await models.Thread.findAll({
    attributes: ["id"], 
    include: [
      {
        model: models.Like,
        required: true, 
        where: { user_id: userId },
      },
    ],
    raw: true, 
  }).then((threads) => threads.map((thread) => thread.id)); 

  if (view === "following") {
    res.locals.threads = (
      await models.Thread.findAll({
        attributes: {
          include: [[fn("COUNT", col("Likes.id")), "likeCount"]],
        },
        include: [
          {
            model: models.User, 
            required: true,
            include: [
              {
                model: models.Follower, 
                where: { follower_id: userId }, 
                required: true, 
                attributes: [], 
              },
            ],
          },
          { model: models.Media },
          {
            model: models.Like,
            attributes: [],
            required: false,
          },
          {
            model: models.Comment,
            attributes: ["id"],
            required: false,
          },
          {
            model: models.Repost,
            attributes: ["id"],
            required: false,
          },
        ],
        group: ["Thread.id", "User.id", "Media.id", "Comments.id", "Reposts.id"],
        order: [["id", "ASC"]],
      })
    ).map((thread) => {
      const plainThread = thread.get({ plain: true });
  
      plainThread.isLiked = likedThreadIds.includes(plainThread.id);
      return plainThread;
    });
  } else {
    res.locals.threads = (
      await models.Thread.findAll({
        attributes: {
          include: [[fn("COUNT", col("Likes.id")), "likeCount"]],
        },
        include: [
          { model: models.User },
          { model: models.Media },
          {
            model: models.Like,
            attributes: [],
            required: false,
          },
          {
            model: models.Comment,
            attributes: ["id"],
            required: false,
          },
          {
            model: models.Repost,
            attributes: ["id"],
            required: false,
          },
        ],
        group: [
          "Thread.id",
          "User.id",
          "Media.id",
          "Comments.id",
          "Reposts.id",
        ],
        order: [["createdAt", "ASC"]],
      })
    ).map((thread) => {
      const plainThread = thread.get({ plain: true });

      plainThread.isLiked = likedThreadIds.includes(plainThread.id);
      return plainThread;
    });

    // res.locals.threads.forEach(thread => {
    //   console.log(thread);
    // })
  }

  res.render("homepage", { headerName: "Home", page: 1 });
};

controller.showSearch = async (req, res) => {
  const userId = req.session.userId;
  res.locals.loggingInUser = await models.User.findByPk(userId, (err, user) => {
    if (err) {
      return res.status(500).send('Error retrieving user information');
    }
  });
  res.locals.users = await models.User.findAll();
  res.render("search", {headerName: "Search", page: 2});
}

controller.markRead = async (req, res) => {
  const { notiId } = req.params;

  try {
    const noti = await models.Notification.findOne({ where: { id: notiId } });

    if (!noti) {
      return res.redirect('/Activity');
    }

    noti.is_read = true;
    await noti.save();
 
    res.send("Mark as read successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
};

controller.deleteNoti = async (req, res) => {
  const { notiId } = req.params;

  try {
    await models.Notification.destroy({ where: { id: notiId } });

    res.send("Delete notification successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
}

controller.showActivity = async(req, res) => {
  const userId = req.session.userId;
  res.locals.loggingInUser = await models.User.findByPk(userId, (err, user) => {
    if (err) {
      return res.status(500).send('Error retrieving user information');
    }
  });

  res.locals.notifications = await models.Notification.findAll({
    include: [
      {
        model: models.User,
        as: 'transfererFk', // Specify alias for transferer_id
      },
    ],
    where: { receiver_id: userId },
    order: [["id", "ASC"]],
  });
  // console.log("test thu ne", res.locals.notifications);

  res.render("activity", {headerName: "Activity", page: 3});
}

controller.editProfile = async (req, res) => {
  console.log(req.body);
  console.log("File uploaded:", req.file);
  const {username, bio} = req.body;
  const userId = req.session.userId;

  let profile_picture = undefined;

  if (req.file) {
    profile_picture = `/img/profile/${req.file.filename}`; 
  }

  try {
    await models.User.update(
      {
        ...(username !== undefined && { username }),
        ...(profile_picture !== undefined && { profile_picture }),
        ...(bio !== undefined && { bio }),
      }, 
      {
      where: { id: userId },
    });

    res.send("User has been updated");
  }catch(error){
    console.error(error);
    res.status(500).send("Cannot update user");
  }
}

controller.showProfile = async (req, res) => {

    const userId = req.session.userId;

    res.locals.currentUser = await models.User.findByPk(userId, (err, user) => {
      if (err) {
        return res.status(500).send('Error retrieving user information');
      }
    });
    res.locals.loggingInUser = res.locals.currentUser;

    const following = await models.User.findAll({
      attributes: ["id"],
      include: [
        {
          model: models.Follower,
          where: { follower_id: userId },
          required: true,
          attributes: [],
        },
      ],
    }).then((following) => following.map((following) => following.id)); 

    res.locals.follower = ( await models.Follower.findAll({
      where: { following_id: userId },
      include: [
        {model: models.User, as: 'followerFk'},
      ]
    })
    ).map((eachFollower) => {
      const plainFollower = eachFollower.get({ plain: true });
      
      plainFollower.isFollowed = following.includes(plainFollower.followerFk.id);
      return plainFollower;
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
        {model: models.Like,
          required: false,
          where: { user_id: userId },
        },
      ]
    });

    res.locals.reposts = await models.Repost.findAll({
      where: { user_id: userId },
      include: [
        {
          model: models.Thread, // Join with the Thread table
          attributes: ["id", "content", "createdAt"], // Select specific thread fields
          include: [ 
            {model: models.User, attributes: ["id", "username", "profile_picture"]}, 
            {model: models.Media},
          ],
        },
      ],
    });

    const isCurrentUser = true;
    res.locals.threads.forEach(thread => {
      thread.isLiked = thread.Likes.length > 0;  // If the current user liked the thread, set isLiked to true
    });
    res.locals.isCurrentUser = isCurrentUser;
    res.render("profile", {headerName: "Profile", page: 4});
}

controller.showIDProfile = async (req, res) => {
  const loginId = req.session.userId;
  const userId = req.params.id;
  if(userId == loginId){
    return res.redirect("/Profile");
  }
  res.locals.currentUser = await models.User.findByPk(userId, (err, user) => {
    if (err) {
      return res.status(500).send('Error retrieving user information');
    }
  });
  res.locals.loggingInUser = await models.User.findByPk(loginId, (err, user) => {
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
      {model: models.Like,
        required: false,
        where: { user_id: loginId },
      },
    ]
  });

    res.locals.reposts = await models.Repost.findAll({
      where: { user_id: userId },
      include: [
        {
          model: models.Thread, // Join with the Thread table
          attributes: ["id", "content", "createdAt"], // Select specific thread fields
          include: [ 
            {model: models.User, attributes: ["id", "username", "profile_picture"]}, 
            {model: models.Media},      
          ],
        },
      ],
    });

  // Check if the logged-in user is following the current user
    const isFollowed = await models.Follower.findOne({
        where: {
            follower_id: loginId,
            following_id: userId,
        }
    });
    
    res.locals.isFollowed = isFollowed ? true : false;  // If a follow record exists, mark as followed

    res.locals.threads.forEach(thread => {
      thread.isLiked = thread.Likes.length > 0;  // If the current user liked the thread, set isLiked to true
    });
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

    await models.Notification.create({
      content: "Follow you",
      transferer_id: currentUserId,
      receiver_id: targetUserId,
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
    await models.Notification.destroy({
      where: {
        transferer_id: currentUserId,
        receiver_id: targetUserId,
      },
    });

    res.status(200).send('Unfollowed successfully');
  } catch (err) {
    res.status(500).send('Error unfollowing the user');
  }
};

controller.showPostDetails = async (req, res) => {
    const postid = req.params.postid;
    const currentUserId = req.session.userId;
    res.locals.loggingInUser = await models.User.findByPk(currentUserId, (err, user) => {
      if (err) {
        return res.status(500).send('Error retrieving user information');
      }
    });

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
        {model: models.Like,
          attributes: ['user_id'],
        },
        {model: models.Repost,
          attributes: ['user_id'],
        }
      ],
      where: {
        id: postid
      }
    });

    const isLiked = thread.Likes.some(like => like.user_id === currentUserId);
    console.log("Is Liked:", isLiked);
    thread.isLiked = isLiked;

    res.locals.thread = thread;
    res.render("post_details", {headerName: "Post", page: 5});
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