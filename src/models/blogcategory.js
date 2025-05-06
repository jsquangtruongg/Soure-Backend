"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class BlogCategory extends Model {
    static associate(models) {
      // Mối quan hệ với Blog
      BlogCategory.hasMany(models.Blog, {
        foreignKey: "blog_category_id", // Khóa ngoại cho bảng Blog
        as: "blogs", // Alias cho mối quan hệ
      });

      // Mối quan hệ với User
      BlogCategory.belongsTo(models.User, {
        foreignKey: "user_id", // Khóa ngoại cho bảng User
        targetKey: "id",
        as: "userData", // Alias cho mối quan hệ
      });
    }
  }

  BlogCategory.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, // Bắt buộc phải có tiêu đề
      },
      describe: {
        type: DataTypes.STRING,
        allowNull: true, // Mô tả không bắt buộc
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true, // Ảnh không bắt buộc
      },
    },
    {
      sequelize,
      modelName: "BlogCategory",
      tableName: "BlogCategories",
    }
  );

  return BlogCategory;
};
