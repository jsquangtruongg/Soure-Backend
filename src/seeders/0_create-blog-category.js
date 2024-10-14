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
          img: "https://res.cloudinary.com/dq4basktt/image/upload/v1728738698/learn_nodejs/rymiq2wojj1jcdlxtgap.jpg",
        },
        {
          title: "Technical",
          describe: "Tuyển dụng số lượng lớn",
          createdAt: new Date(),
          updatedAt: new Date(),
          img: "https://res.cloudinary.com/dq4basktt/image/upload/v1728718394/learn_nodejs/kmxxjxzgceb7pmcq0c6l.jpg",
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
