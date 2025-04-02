"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Blogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false, // không cho phép để trống
      },
      content: {
        type: Sequelize.TEXT("long"),
        allowNull: false, // không cho phép để trống
      },
      img: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "Users", // tên bảng Users
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      salary: {
        type: Sequelize.STRING,
      },
      blog_category_id: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        references: {
          model: "BlogCategories", // tên bảng BlogCategories
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    // Thêm chỉ mục cho user_id và blog_category_id nếu cần thiết
    await queryInterface.addIndex("Blogs", ["user_id"]);
    await queryInterface.addIndex("Blogs", ["blog_category_id"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Blogs");
  },
};
