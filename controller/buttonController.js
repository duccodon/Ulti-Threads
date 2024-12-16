const controller = {};
const models = require("../models");

controller.likePost = async (req, res) => {
    const currentUserId = parseInt(req.session.userId);
    const threadId = parseInt(req.params.id);
  
    try {
      await models.Like.create({
          user_id: currentUserId,
          thread_id: threadId,
      });
      console.log("current:", currentUserId);
      console.log("target:", threadId);
      // await models.Notification.create({
      //     content: "Follow you",
      //     transferer_id: currentUserId,
      //     receiver_id: targetUserId,
      // });
      const likeCount = await models.Like.count({ where: { thread_id: threadId } });
      res.status(200).json({ isLiked: true, likeCount });

      } catch (err) {
      res.status(500).send('Error like the post');
      }
  }
  
  controller.unlikePost = async (req, res) => {
    const currentUserId = parseInt(req.session.userId);
    const threadId = parseInt(req.params.id);
    console.log("current:", currentUserId);
    console.log("target:", threadId);
  
    try {
    const likedPost = await models.Like.findOne({
        where: {
            user_id: currentUserId,
            thread_id: threadId,
        },
    });
  
  
    await likedPost.destroy(); // Unfollow the user
    
    // await models.Notification.destroy({
    //     where: {
    //     transferer_id: currentUserId,
    //     receiver_id: targetUserId,
    //     },
    // });
    const likeCount = await models.Like.count({ where: { thread_id: threadId } });
    res.status(200).json({ isLiked: false, likeCount });
    } catch (err) {
    res.status(500).send('Error unlike the post');
    }
  }
  

  controller.addPost = async(req, res) => {
    const {userId, content, image, tag} = req.body;

    const newPost = await models.Thread.create({
        content,
        user_id: userId,
    })

    // Handle the uploaded image (if provided)
    if (req.file) {
        const mediaUrl = `/img/post/${req.file.filename}`;
        await models.Media.create({
            mediaUrl,
            thread_id: newPost.id, // Associate with the newly created post
        });
    }

    return res.redirect('/Homepage');
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

controller.showRepostOverlay = async (req, res) => {
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
    res.render("repost-overlay", {layout:false});
  }

  controller.addComment = async (req, res) => {
    try {
      const threadId = req.params.postid; // Get thread ID from URL
      const { user_id, content, page } = req.body; // Get data from form inputs
      // Input validation
      if (!user_id || !threadId || !content) {
          return res.status(400).send('All fields are required.');
      }
      // Save the comment to your database
        // Save the comment
        const comment = await models.Comment.create({
          user_id: user_id,
          thread_id: threadId,
          content: content
      });
      res.redirect(`/Homepage/${threadId}`);
  } catch (error) {
      console.error('Error saving comment:', error);
      res.status(500).send('An error occurred while saving the comment.');
  }
  }


  controller.addRepost = async (req, res) => {
      try {
        const threadId = req.params.postid; // Get thread ID from URL
        const { user_id, thread_user_id,  page } = req.body; // Get data from form inputs
        // Input validation
        if (!user_id || !threadId) {
            return res.status(400).send('All fields are required.');
        }
        const existingRepost = await models.Repost.findOne({
          where: {
              user_id: user_id,
              thread_id: threadId,
          },
        });
        if (existingRepost) {
          // If repost already exists, send notification
          //return res.status(400).json({ success: false, message: 'You have already reposted this thread.' });
          return res.redirect(`/Profile/?tab=repost`);
        }
        else if (user_id == thread_user_id) {
          //return res.status(400).json({ success: false, message: 'You cannot repost your own thread.' });
          return res.redirect(`/Profile/`);
        }
        // Save the repost to your database
          const repost = await models.Repost.create({
            user_id: user_id,
            thread_id: threadId,
        });
        res.redirect(`/Profile/?tab=repost`);
    } catch (error) {
        console.error('Error saving repost:', error);
        res.status(500).send('An error occurred while saving the repost.');
    }
  }

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
  
  module.exports = controller;