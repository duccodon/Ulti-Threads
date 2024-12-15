const router = require("express").Router();
const { likePost, unlikePost } = require('../controller/buttonController');

router.post('/Like/:id', likePost);
router.delete('/Like/:id', unlikePost);

module.exports = router;