/** @type {import('sequelize-cli').Migration} */
// Migration để tạo bảng DeleteApplies
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DeleteApplies", {
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
        allowNull: false, // Bắt buộc nhập
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false, // Bắt buộc nhập
        unique: true, // Đảm bảo email là duy nhất
      },
      phone: {
        type: Sequelize.INTEGER,
        allowNull: false, // Bắt buộc nhập
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
          model: "Jobs", // tên bảng Jobs
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
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });

    // Thêm chỉ mục cho user_id, job_id nếu cần thiết
    await queryInterface.addIndex("DeleteApplies", ["user_id"]);
    await queryInterface.addIndex("DeleteApplies", ["job_id"]);
  },

  async down(queryInterface) {
    await queryInterface.dropTable("DeleteApplies");
  },
};
