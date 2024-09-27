import { where } from "sequelize";
import db from "../models";

export const GetOne = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id: userId },
        attributes: {
          exclude: ["password", "role_code"],
        },
        include: [
          {
            model: db.Role,
            as: "roleData",
            attributes: ["id", "code", "value"],
          },
        ],
      });

      resolve({
        err: response ? 0 : 1,
        mes: response ? "Got" : "User not Founds",
        userData: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAllUser = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findAll({});

      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

//edit
export const putUser = (userId, userData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { id: userId },
        include: [
          {
            model: db.Role,
            as: "roleData",
            attributes: ["id", "code"],
          },
        ],
      });
      if (response.roleData.id === 1) {
        return resolve({
          err: 1,
          mess: "No Edit Role Admin",
        });
      }
      await response.update(userData);

      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

//Delete
export const deleteUser = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.destroy({
        where: { id: userId },
      });
      resolve({
        err: response ? 0 : 1,
        mess: response ? "User deleted successfully" : "User not found",
      });
    } catch (error) {
      reject(error);
    }
  });
