const router = require("express").Router();
const { verifyResetPass } = require("../controller/user");

router.get("/", (req, res) => {
  const errorMessage = req.flash("errorMessage");
  return res.render("verifyPass", {
    layout: "account",
    title: "VerifyResetPass",
    errorMessage,
  });
});

router.post("/", verifyResetPass);

module.exports = router;

