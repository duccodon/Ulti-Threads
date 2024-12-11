const router = require("express").Router();
const { showProfile } = require('../controller/pageController');

// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/', showProfile);

module.exports = router;