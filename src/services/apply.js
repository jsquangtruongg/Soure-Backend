import { date } from "joi";
import db from "../models";
import { Op, where } from "sequelize";

const cloudinary = require("cloudinary").v2;

export const getAllApply = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Apply.findAll({
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "lastName", "email", "firstName", "avatar"],
          },
          {
            model: db.Job,
            as: "jobs",
            attributes: ["id", "img", "content"],
          },
          {
            model: db.User,
            as: "userApply",
            attributes: ["id", "lastName", "email", "firstName", "avatar"],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const createApply = ({
  fullName,
  fileData,
  user_id,
  job_id,
  userApply_id,
  email,
  phone,
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Apply.create({
        fullName,
        img: fileData?.path,
        email,
        phone,
        user_id,
        job_id,
        userApply_id,
      });
      if (response) {
        resolve({
          err: 0,
          mess: "Tao thanh cong",
        });
      } else {
        resolve({
          err: 1,
          mess: "Tao that bai",
        });
      }
      if (fileData && !response) cloudinary.uploader.destroy(fileData.filename);
    } catch (error) {
      reject(error);
      if (fileData) cloudinary.uploader.destroy(fileData.filename);
    }
  });

export const getIdApply = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Apply.findOne({
        where: { id },
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "lastName", "email", "firstName", "avatar"],
          },
          {
            model: db.Job,
            as: "jobs",
            attributes: ["id", "img", "content"],
          },
          {
            model: db.User,
            as: "userApply",
            attributes: ["id", "lastName", "email", "firstName", "avatar"],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
