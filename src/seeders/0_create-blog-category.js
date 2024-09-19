"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "BlogCategories",
      [
        {
          title: "Marketing",
          describe: "Tuyển dụng thường xuyên",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Technical",
          describe: "Tuyển dụng số lượng lớn",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
