"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BlogCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BlogCategory.hasMany(models.Blog, {
        foreignKey: "blog_category_id",
        as: "blogs",
      });

      BlogCategory.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });
    }
  }
  BlogCategory.init(
    {
      title: DataTypes.STRING,
      describe: DataTypes.STRING,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "BlogCategory",
    }
  );
  return BlogCategory;
};
