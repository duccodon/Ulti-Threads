// models/Like.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      Like.belongsTo(models.User, { foreignKey: "user_id" });
      Like.belongsTo(models.Thread, { foreignKey: "thread_id" });
    }
  }

  Like.init({}, { sequelize, modelName: "Like" });

  return Like;
};
