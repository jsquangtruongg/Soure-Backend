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

      Apply.belongsTo(models.User, {
        foreignKey: "userApply_id", 
        targetKey: "id",
        as: "userApply", 
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
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      job_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      userApply_id: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Apply",
    }
  );

  return Apply;
};
