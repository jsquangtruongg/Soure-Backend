"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mối quan hệ với bảng Role
      User.belongsTo(models.Role, {
        foreignKey: "role_code",
        targetKey: "code",
        as: "roleData",
      });

      User.hasMany(models.Apply, {
        foreignKey: "user_id",
        sourceKey: "id",
        as: "applies",
      });

      User.hasMany(models.Blog, {
        foreignKey: "user_id",
        sourceKey: "id",
        as: "blogs",
      });

      User.hasMany(models.BrowseApply, {
        foreignKey: "user_id",
        sourceKey: "id",
        as: "browseApplies",
      });
    }
  }

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false, // Không được để trống
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false, // Không được để trống
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Đảm bảo email là duy nhất
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false, // Không được để trống
      },
      avatar: DataTypes.STRING,
      role_code: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
