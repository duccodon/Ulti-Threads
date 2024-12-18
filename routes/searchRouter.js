const router = require("express").Router();
const { showSearch, getUnreadNoti } = require('../controller/pageController');

router.use('/', getUnreadNoti);
router.get('/', showSearch);

module.exports = router;