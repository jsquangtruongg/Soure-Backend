"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.JobCategory, {
        foreignKey: "JobCategory_id",
        targetKey: "id",
        as: "JobCategoryData",
      });

      Job.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });

      Job.belongsTo(models.BlogCategory, {
        foreignKey: "blog_category_id",
        targetKey: "id",
        as: "categoryData",
      });
    }
  }
  Job.init(
    {
      
      content: DataTypes.STRING,
      img: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      JobCategory_id: DataTypes.INTEGER,
      blog_category_id: DataTypes.INTEGER,
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
