const router = require("express").Router();
const { showCreate, addUser} = require('../controller/pageController');
//const { addUser } = require('../controller/user');

router.get('/', showCreate);
router.post('/', addUser);

module.exports = router;