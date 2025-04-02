"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mối quan hệ với BlogCategory
      Blog.belongsTo(models.BlogCategory, {
        foreignKey: "blog_category_id", // Khóa ngoại cho bảng BlogCategory
        targetKey: "id",
        as: "categoryData", // Alias cho mối quan hệ
      });

      // Mối quan hệ với User
      Blog.belongsTo(models.User, {
        foreignKey: "user_id", // Khóa ngoại cho bảng User
        targetKey: "id",
        as: "userData", // Alias cho mối quan hệ
      });
    }
  }

  Blog.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false, // Bắt buộc phải có tiêu đề
      },
      content: {
        type: DataTypes.TEXT, // Sử dụng TEXT cho nội dung dài hơn
        allowNull: false, // Bắt buộc phải có nội dung
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true, // Ảnh không bắt buộc
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Bắt buộc phải có user_id
      },
      salary: {
        type: DataTypes.STRING,
        allowNull: true, // Salary không bắt buộc, tùy thuộc vào ngữ cảnh
      },
      blog_category_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Bắt buộc phải có category
      },
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );

  return Blog;
};
