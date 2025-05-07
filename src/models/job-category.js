"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class JobCategory extends Model {
    static associate(models) {
      // Mối quan hệ với Job
      JobCategory.hasMany(models.Job, {
        foreignKey: "jobCategory_id",
        sourceKey: "id",
        as: "jobs",
      });

      JobCategory.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });
    }
  }

  JobCategory.init(
    {
      title: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "JobCategory",
      tableName: "JobCategories",
    }
  );

  return JobCategory;
};
