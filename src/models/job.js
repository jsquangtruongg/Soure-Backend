"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    static associate(models) {
      Job.belongsTo(models.JobCategory, {
        foreignKey: "jobCategory_id",
        targetKey: "id",
        as: "jobCategoryData",
      });

      Job.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });

      Job.belongsTo(models.BlogCategory, {
        foreignKey: "blogCategory_id",
        targetKey: "id",
        as: "categoryData",
      });

      Job.hasMany(models.Like, {
        foreignKey: "job_id",
        as: "likes",
      });
    }
  }

  Job.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      img: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      jobCategory_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      like_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      blogCategory_id: DataTypes.INTEGER,
      salary: DataTypes.STRING,
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );

  return Job;
};
