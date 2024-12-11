const router = require("express").Router();
const { showHomepage } = require('../controller/pageController');
const { showPostDetails } = require('../controller/pageController');
// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/', showHomepage);
router.get('/Post', showPostDetails);

module.exports = router;