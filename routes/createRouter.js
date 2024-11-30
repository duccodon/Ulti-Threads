const router = require("express").Router();
const { showCreate } = require('../controller/pageController');

router.get('/', showCreate);

module.exports = router;