const router = require("express").Router();
const { showSearch } = require('../controller/pageController');

// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/', showSearch);

module.exports = router;