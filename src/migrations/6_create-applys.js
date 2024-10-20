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
      fullName: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      phone: { type: Sequelize.INTEGER },
      user_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      job_id: { type: Sequelize.INTEGER, defaultValue: 1 },
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
    await queryInterface.dropTable("Applies");
  },
};
