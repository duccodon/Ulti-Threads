// models/Media.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    static associate(models) {
      Media.belongsTo(models.Thread, { foreignKey: "thread_id" });
    }
  }

  Media.init(
    {
      mediaUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Media",
    }
  );

  return Media;
};
