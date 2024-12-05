// models/Comment.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: "user_id" });
      Comment.belongsTo(models.Thread, { foreignKey: "thread_id" });
    }
  }

  Comment.init(
    {
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );

  return Comment;
};
