"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ApplyMember extends Model {
    static associate(models) {
      ApplyMember.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });
      ApplyMember.belongsTo(models.Job, {
        foreignKey: "job_id",
        targetKey: "id",
        as: "jobs",
      });
      ApplyMember.belongsTo(models.Apply, {
        foreignKey: "apply_id",
        targetKey: "id",
        as: "Applies",
      });
      ApplyMember.belongsTo(models.User, {
        foreignKey: "userApply_id",
        targetKey: "id",
        as: "userApply",
      });
    }
  }
  ApplyMember.init(
    {
      content: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      job_id: DataTypes.INTEGER,
      apply_id: DataTypes.INTEGER,
      userApply_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ApplyMember",
    }
  );
  return ApplyMember;
};
