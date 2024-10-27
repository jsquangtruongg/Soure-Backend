"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class BrowseApply extends Model {
    static associate(models) {
      BrowseApply.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
        as: "userData",
      });
      BrowseApply.belongsTo(models.User, {
        foreignKey: "userApply_id",
        targetKey: "id",
        as: "userApply",
      });
      BrowseApply.belongsTo(models.Job, {
        foreignKey: "job_id",
        targetKey: "id",
        as: "jobs",
      });
      BrowseApply.belongsTo(models.Apply, {
        foreignKey: "apply_id",
        targetKey: "id",
        as: "Applies",
      });
    }
  }
  BrowseApply.init(
    {
      user_id: DataTypes.INTEGER,
      job_id: DataTypes.INTEGER,
      userApply_id: DataTypes.INTEGER,
      apply_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BrowseApply",
    }
  );
  return BrowseApply;
};
