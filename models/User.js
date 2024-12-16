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
      User.hasMany(models.Notification, {foreignKey: "transferer_id"  });
      User.hasMany(models.Notification, { foreignKey: "receiver_id"  });
      User.hasMany(models.Repost, { foreignKey: "user_id" });
    }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: true,  // Đảm bảo username là duy nhất
        allowNull: false  // Đảm bảo username không được để trống
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phonenumber: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bio: DataTypes.TEXT,
      profile_picture: DataTypes.STRING,
      verificationToken: {   
        type: DataTypes.STRING,
        allowNull: true,      
      },
      resetToken: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isVerified: {           
        type: DataTypes.BOOLEAN,
        defaultValue: false,  
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
