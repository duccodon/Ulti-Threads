const controller = {};
const models = require("../models");

controller.addUser = async (req, res) => {
  const { email, phonenumber, username, password } = req.body;
  try {
    await models.User.create({
      email,
      phonenumber,
      username,
      password,
    });
    res.redirect("/login");
  } catch (error) {
    console.error(error);
  }
};


controller.verifyEmail = async (req, res) => {
  const { token } = req.query; // Token sent in the query params

  try {
    // Find the user with the matching verification token
    const user = await models.User.findOne({ where: { verificationToken: token } });

    if (!user) {
      req.flash('errorMessage', 'Invalid or expired verification token.');
      return res.redirect('/login');
    }

    user.isVerified = true;
    user.verificationToken = null; 
    await user.save();

    req.flash('errorMessage', 'Your email has been verified successfully. You can now log in.');
    return res.redirect('/login');
  } catch (error) {
    console.error(error);
    return res.render("login", {
      layout: "account",
      title: "Login",
      errorMessage: "An unexpected error occurred. Please try again.",
    });
  }
};

module.exports = controller;
