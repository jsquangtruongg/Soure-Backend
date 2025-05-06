"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("BlogCategories", [
      {
        title: "Marketing",
        describe: "Tuyển dụng thường xuyên",
        createdAt: new Date(),
        updatedAt: new Date(),
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1743598293/learn_nodejs/mkie3rwvo3sgt0qn6qzo.jpg",
      },
      {
        title: "Technical",
        describe: "Tuyển dụng số lượng lớn",
        createdAt: new Date(),
        updatedAt: new Date(),
        img: "https://res.cloudinary.com/dq4basktt/image/upload/v1744677387/learn_nodejs/gupyfnjzhfyaomqukkap.png",
      },
    ]);
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
