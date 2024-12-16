const router = require("express").Router();
const { showProfile, showIDProfile, addFollower, deleteFollower} = require('../controller/pageController');

// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/', showProfile);
router.get('/:id', showIDProfile); //view other user's profile
router.post('/:id', addFollower);

router.delete('/:id', deleteFollower);
module.exports = router;