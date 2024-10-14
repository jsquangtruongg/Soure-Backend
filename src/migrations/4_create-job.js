"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.TEXT("long"),
      },
      img: {
        type: Sequelize.STRING,
      },
      salary: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      user_id: { type: Sequelize.INTEGER, defaultValue: 1 },
      JobCategory_id: { type: Sequelize.INTEGER, defaultValue: 1 },
      blog_category_id: { type: Sequelize.INTEGER, defaultValue: 0 },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Jobs");
  },
};
