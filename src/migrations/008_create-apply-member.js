"use strict";
/**@type {import('sequelize-cli').Migration}*/

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ApplyMembers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.TEXT("long"),
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
      job_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "Job", // tên bảng Jobs
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      apply_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "Applies", // tên bảng Applies
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      userApply_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "Users", // nếu userApply_id trỏ đến bảng Users
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

    // Thêm chỉ mục cho user_id, job_id, và apply_id nếu cần thiết
    await queryInterface.addIndex("ApplyMembers", ["user_id"]);
    await queryInterface.addIndex("ApplyMembers", ["job_id"]);
    await queryInterface.addIndex("ApplyMembers", ["apply_id"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("ApplyMembers");
  },
};
