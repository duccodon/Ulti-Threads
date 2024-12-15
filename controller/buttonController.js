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

module.exports = controller;