// models/Notification.js
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {
      Notification.belongsTo(models.User, { as: 'transfererFk', foreignKey: "transferer_id" });
      Notification.belongsTo(models.User, { as: 'receiverFk', foreignKey: "receiver_id" });
    }
  }

  Notification.init(
    {
      content: DataTypes.TEXT,
      is_read: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );

  return Notification;
};
