// models/Follower.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Follower extends Model {
    static associate(models) {
      Follower.belongsTo(models.User, { as: "followerFk", foreignKey: "follower_id" });
      Follower.belongsTo(models.User, { as: "followingFk", foreignKey: "following_id" });
    }
  }

  Follower.init({}, { sequelize, modelName: "Follower" });

  return Follower;
};
