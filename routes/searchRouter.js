const router = require("express").Router();
const { showSearch } = require('../controller/pageController');

router.get('/', showSearch);

module.exports = router;