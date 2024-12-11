const router = require("express").Router();
const { showLogin, login } = require('../controller/pageController');
const { verify } = require('../controller/user');

router.get('/', showLogin);
router.use('/ResetPass', require('./resetPass.js'));    
router.use('/VerifyReset', require('./verifyPass.js'));
router.post('/', login);
module.exports = router;