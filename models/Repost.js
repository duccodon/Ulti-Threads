// models/Repost.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Repost extends Model {
    static associate(models) {
        Repost.belongsTo(models.User, { foreignKey: "user_id" });
        Repost.belongsTo(models.Thread, { foreignKey: "thread_id" });
    }
  }

  Repost.init({}, { sequelize, modelName: "Repost" });

  return Repost;
};
