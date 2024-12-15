const router = require("express").Router();
const { showHomepage } = require('../controller/pageController');
const { showPostDetails } = require('../controller/pageController');
//const { addPost } = require('../controller/post');
const multer = require("multer");
const path = require("path");


// // Configure multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, "../public/img/post"));
//     },
//     filename: (req, file, cb) => {
//         const uniqueName = `${Date.now()}-${file.originalname}`;
//         cb(null, uniqueName);
//     },
// });
// const upload = multer({ storage });


// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/', showHomepage);
router.get('/:postid', showPostDetails);


module.exports = router;