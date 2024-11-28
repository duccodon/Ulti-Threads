const router = require("express").Router();
const { showHomepage } = require('../controller/pageController');

// router.use('/', init);
// router.get('/', showList);
// router.get('/:id', showDetails);
router.get('/', showHomepage);

module.exports = router;