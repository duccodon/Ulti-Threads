// models/Thread.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Thread extends Model {
    static associate(models) {
      Thread.belongsTo(models.User, { foreignKey: "user_id" });
      Thread.hasMany(models.Comment, { foreignKey: "thread_id" });
      Thread.hasMany(models.Like, { foreignKey: "thread_id" });
      Thread.hasMany(models.Media, { foreignKey: "thread_id" });
    }
  }

  Thread.init(
    {
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Thread",
    }
  );

  return Thread;
};
