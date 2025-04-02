"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BlogCategories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false, // không cho phép để trống
        unique: true, // đảm bảo tiêu đề là duy nhất (nếu cần)
      },
      describe: {
        type: Sequelize.STRING,
        allowNull: false, // không cho phép để trống
      },
      img: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users", // Tham chiếu đến bảng Users
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
    // Thêm chỉ mục cho user_id nếu cần thiết
    await queryInterface.addIndex("BlogCategories", ["user_id"]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("BlogCategories");
  },
};
