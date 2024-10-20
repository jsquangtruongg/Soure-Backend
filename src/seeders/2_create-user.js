"use strict";
const bcrypt = require("bcryptjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Nguyen",
          lastName: "Admin",
          email: "admin@gmail.com",
          role_code: "R1",
          avatar:
            "https://res.cloudinary.com/dq4basktt/image/upload/v1729276159/cf3l7gwaupwa2pjuwle8.jpg",
          password: bcrypt.hashSync("123456789", bcrypt.genSaltSync(8)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Nguyen",
          lastName: "Editor",
          email: "editor@gmail.com",
          role_code: "R2",
          avatar:
            "https://res.cloudinary.com/dq4basktt/image/upload/v1729276159/cf3l7gwaupwa2pjuwle8.jpg",
          password: bcrypt.hashSync("123456789", bcrypt.genSaltSync(8)),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
