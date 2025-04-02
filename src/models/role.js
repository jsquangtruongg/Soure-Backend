"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mối quan hệ với bảng User
      Role.hasMany(models.User, {
        foreignKey: "role_code", // Khóa ngoại trong bảng User
        sourceKey: "code", // Khóa chính trong bảng Role
        as: "users", // Đặt tên cho alias của mối quan hệ
      });
    }
  }

  Role.init(
    {
      code: {
        type: DataTypes.STRING,
        unique: true, // Đảm bảo mã vai trò là duy nhất
      },
      value: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Role",
    }
  );

  return Role;
};
