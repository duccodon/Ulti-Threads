const router = require("express").Router();
const { showActivity, getUnreadNoti, markRead, deleteNoti} = require('../controller/pageController');

router.use('/', getUnreadNoti);
router.get('/', showActivity);
router.put('/:notiId', markRead);
router.delete('/:notiId', deleteNoti);

module.exports = router;