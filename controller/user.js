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

module.exports = controller;
