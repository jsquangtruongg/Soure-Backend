"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      JobCategory.hasMany(models.Job, {
        foreignKey: "JobCategory_id",
        targetKey: "id",
        as: "Jobs",
      });

      JobCategory.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });
    }
  }
  JobCategory.init(
    {
      title: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "JobCategory",
    }
  );
  return JobCategory;
};
