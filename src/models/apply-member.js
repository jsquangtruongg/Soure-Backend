"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplyMember extends Model {
    static associate(models) {
      // Mối quan hệ với User - người tạo ứng tuyển
      ApplyMember.belongsTo(models.User, {
        foreignKey: "user_id", // Khóa ngoại cho người dùng
        targetKey: "id",
        as: "userData", // Alias cho mối quan hệ
      });

      // Mối quan hệ với Job
      ApplyMember.belongsTo(models.Job, {
        foreignKey: "job_id", // Khóa ngoại cho Job
        targetKey: "id",
        as: "jobs", // Alias cho mối quan hệ
      }); 

      // Mối quan hệ với Apply
      ApplyMember.belongsTo(models.Apply, {
        foreignKey: "apply_id", // Khóa ngoại cho Apply
        targetKey: "id",
        as: "Applies", // Alias cho mối quan hệ
      });

      // Mối quan hệ với User - người được ứng tuyển
      ApplyMember.belongsTo(models.User, {
        foreignKey: "userApply_id", // Khóa ngoại cho người được ứng tuyển
        targetKey: "id",
        as: "userApply", // Alias cho mối quan hệ
      });
    }
  }

  ApplyMember.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: true, //  Nội dung không bắt buộc
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Bắt buộc phải có user_id
      },
      job_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Bắt buộc phải có job_id
      },
      apply_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Bắt buộc phải có apply_id
      },
      userApply_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Không bắt buộc, nếu cần có thể bỏ trống
      },
    },
    {
      sequelize,
      modelName: "ApplyMember",
    }
  );

  return ApplyMember;
};
