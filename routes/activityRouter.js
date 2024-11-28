const router = require("express").Router();
const { showActivity } = require('../controller/pageController');

// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/', showActivity);

module.exports = router;