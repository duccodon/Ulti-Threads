const router = require("express").Router();
const { showProfile, showIDProfile, editProfile} = require('../controller/pageController');
const multer = require("multer");
const path = require("path");

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/img/profile"));
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});
const upload = multer({ storage });


router.get('/', showProfile);
router.get('/:id', showIDProfile); //view other user's profile
router.put('/', upload.single('profile_picture'), editProfile);

module.exports = router;