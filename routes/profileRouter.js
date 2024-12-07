const router = require("express").Router();
const { showProfile } = require('../controller/pageController');
const { showPostDetails } = require('../controller/pageController');
// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/', showProfile);
router.get('/Post', showPostDetails);
module.exports = router;