"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Apply extends Model {
    static associate(models) {
      Apply.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });
      Apply.belongsTo(models.Job, {
        foreignKey: "job_id",
        targetKey: "id",
        as: "jobs",
      });
    }
  }
  Apply.init(
    {
      img: DataTypes.STRING,

      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      fullName: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      job_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Apply",
    }
  );
  return Apply;
};
