"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false, // không cho phép để trống
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false, // không cho phép để trống
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, // không cho phép để trống
        unique: true, // đảm bảo email là duy nhất
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, // không cho phép để trống
      },
      avatar: { type: Sequelize.STRING },
      role_code: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "R3",
      },
      createdAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ), // tự động cập nhật
      },
    });
    // Thêm chỉ mục cho role_code nếu cần thiết
    await queryInterface.addIndex("Users", ["role_code"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
