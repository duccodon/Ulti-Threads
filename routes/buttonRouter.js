const router = require("express").Router();
const { showCommentOverlay, showRepostOverlay, likePost, unlikePost, addPost, addComment, addRepost } = require('../controller/buttonController');
const multer = require("multer");
const path = require("path");


// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/img/post"));
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});
const upload = multer({ storage });


router.get('/Comment/:postid', showCommentOverlay);
router.get('/Repost/:postid', showRepostOverlay);


router.post('/Like/:id', likePost);
router.delete('/Like/:id', unlikePost);
router.post('/Create', upload.single('image'), addPost);

router.post('/Comment/:id', addComment);
router.post('/Repost/:id', addRepost);


module.exports = router;