"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
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
      User.hasMany(models.Job, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "Jobs",
      });
    }
  }

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      field: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      scale: {
        type: DataTypes.STRING,
      },
      education_levels: {
        type: DataTypes.STRING,
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
