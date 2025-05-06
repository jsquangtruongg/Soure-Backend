/** @type {import("sequelize-cli").Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BrowseApplies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    // Thêm chỉ mục cho user_id, job_id, apply_id nếu cần thiết
    await queryInterface.addIndex("BrowseApplies", ["user_id"]);
    await queryInterface.addIndex("BrowseApplies", ["job_id"]);
    await queryInterface.addIndex("BrowseApplies", ["apply_id"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("BrowseApplies");
  },
};
