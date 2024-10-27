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
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      job_id: { type: Sequelize.INTEGER, defaultValue: 1 },
      apply_id: { type: Sequelize.INTEGER, defaultValue: 1 },
      userApply_id: { type: Sequelize.INTEGER, defaultValue: 1 },
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
  },
  async down(queryInterface) {
    await queryInterface.dropTable("ApplyMembers");
  },
};
