"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JobCategory.hasMany(models.Blog, {
        foreignKey: "blog_category_id",
        as: "blogs",
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
    },
    {
      sequelize,
      modelName: "JobCategory",
    }
  );
  return JobCategory;
};
