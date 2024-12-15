const router = require("express").Router();
const { likePost, unlikePost, addPost } = require('../controller/buttonController');
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



router.post('/Like/:id', likePost);
router.delete('/Like/:id', unlikePost);
router.post('/Create', upload.single('image'), addPost);

module.exports = router;