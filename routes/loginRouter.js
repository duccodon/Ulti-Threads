const router = require("express").Router();
const { showLogin, login } = require('../controller/pageController');

router.get('/', showLogin);
router.post('/', login);
module.exports = router;