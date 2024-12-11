const router = require("express").Router();
const { resetPass } = require("../controller/user");

router.get("/", (req, res) => {
  const errorMessage = req.flash("errorMessage");
  return res.render("resetPass", {
    layout: "account",
    title: "ResetPass",
    errorMessage,
  });
});
router.post("/", resetPass);

module.exports = router;
