const router = require("express").Router();
const { showProfile, showIDProfile, showAbout} = require('../controller/pageController');

// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/', showProfile);
router.get('/:id', showIDProfile); //view other user's profile
router.get('/About/:id', showAbout); //view other user's profile
module.exports = router;