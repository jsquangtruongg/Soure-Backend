"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DeleteApply extends Model {
    static associate(models) {
      // Mối quan hệ với User (người dùng tạo)
      DeleteApply.belongsTo(models.User, {
        foreignKey: "user_id", // Khóa ngoại để chỉ định người dùng tạo
        targetKey: "id",
        as: "userData",
      });

      // Mối quan hệ với User (người dùng đã nộp đơn)
      DeleteApply.belongsTo(models.User, {
        foreignKey: "userApply_id", // Khóa ngoại để chỉ định người dùng đã nộp đơn
        targetKey: "id",
        as: "userApply",
      });

      // Mối quan hệ với Job
      DeleteApply.belongsTo(models.Job, {
        foreignKey: "job_id",
        targetKey: "id",
        as: "jobs", // Thay đổi alias thành "job" cho dễ hiểu hơn
      });
    }
  }

  DeleteApply.init(
    {
      img: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      fullName: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      job_id: DataTypes.INTEGER,
      userApply_id: DataTypes.STRING, // Có thể xem xét thay đổi thành INTEGER nếu lưu trữ ID
    },
    {
      sequelize,
      modelName: "DeleteApply",
    }
  );

  return DeleteApply;
};
