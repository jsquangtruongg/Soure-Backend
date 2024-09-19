"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Roles",
      [
        {
          code: "R1",
          value: "Admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: "R2",
          value: "Editor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          code: "R3",
          value: "User",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Roles", null, {});
  },
};
