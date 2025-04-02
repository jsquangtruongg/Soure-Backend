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

      // Nếu bạn muốn thêm mối quan hệ với User, hãy chắc chắn rằng User có trường user_id
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
    },
    {
      sequelize,
      modelName: "JobCategory",
    }
  );

  return JobCategory;
};
