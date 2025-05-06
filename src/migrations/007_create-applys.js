"use strict";
/**@type {import('sequelize-cli').Migration}*/

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Applies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      img: {
        type: Sequelize.STRING,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      job_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "Job",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      userApply_id: {
        type: Sequelize.STRING,
        allowNull: true,
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

    // Thêm chỉ mục cho user_id và job_id nếu cần thiết
    await queryInterface.addIndex("Applies", ["user_id"]);
    await queryInterface.addIndex("Applies", ["job_id"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Applies");
  },
};
