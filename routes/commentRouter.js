const router = require("express").Router();
const { showCommentOverlay } = require('../controller/pageController');

// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/:postid', showCommentOverlay);

module.exports = router;