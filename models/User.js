// models/User.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Thread, { foreignKey: "user_id" });
      User.hasMany(models.Comment, { foreignKey: "user_id" });
      User.hasMany(models.Like, { foreignKey: "user_id" });
      User.hasMany(models.Follower, { foreignKey: "follower_id" });
      User.hasMany(models.Follower, { foreignKey: "following_id" });
      User.hasMany(models.Notification, { foreignKey: "user_id" });
    }
  }

  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      bio: DataTypes.TEXT,
      profile_picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
