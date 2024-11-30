const router = require("express").Router();
const { showLogin } = require('../controller/pageController');

router.get('/', showLogin);

module.exports = router;