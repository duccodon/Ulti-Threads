const controller = {};
const models = require("../models");


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