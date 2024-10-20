import { where } from "sequelize";
import db from "../models";
import { Op } from "sequelize";
import { query } from "express";
const cloudinary = require("cloudinary").v2;
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

export const getAllUser = (lastName, firstName, role_code, body) =>
  new Promise(async (resolve, reject) => {
    try {
      let queryConditions = {};

      if (lastName) {
        queryConditions.lastName = { [Op.substring]: lastName };
      }

      if (firstName) {
        queryConditions.firstName = { [Op.substring]: firstName };
      }
      if (role_code) {
        queryConditions.role_code = { [Op.substring]: role_code };
      }

      if (body) {
        queryConditions = { ...queryConditions, ...body };
      }

      const response = await db.User.findAll({
        where: queryConditions,
        attributes: {
          exclude: ["password"],
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
        mess: response ? "Users fetched successfully" : "No users found",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
// export const getAllUser = (name, body) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       if (name) body.lastName = { [Op.substring]: name };
//       const response = await db.User.findAll({
//         where: query,
//       });

//       resolve({
//         err: response ? 0 : 1,
//         mess: "The Blog was create successfully",
//         data: response,
//       });
//     } catch (error) {
//       reject(error);
//     }
//   });

//edit
export const putUser = (userId, userData, fileData) =>
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
      if (fileData) {
        if (response.avatar) {
          await cloudinary.uploader.destroy(response.avatar);
        }
        const uploadResponse = await cloudinary.uploader.upload(fileData.path);
        userData.avatar = uploadResponse.secure_url;
      }
      await response.update(userData);

      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
       if (fileData) {
         await cloudinary.uploader.destroy(fileData.filename); // Xóa ảnh nếu có lỗi xảy ra
       }
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
