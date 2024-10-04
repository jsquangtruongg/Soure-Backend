import { where } from "sequelize";
import db from "../models";
export const createJob = ({ content, img, user_id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Job.create({
        content,
        img,
        user_id,
      });

      resolve({
        err: response ? 0 : 1,
        mess: "The Job was create successfully",
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAllJob = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Job.findAll({
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "avatar", "firstName", "lastName"],
          },
        ],
      });

      resolve({
        err: response ? 0 : 1,
        mess: "The Job was create successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateJob = (id, jobData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Job.findOne({
        where: { id },
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "firstName", "lastName"],
          },
        ],
      });
      await response.update(jobData);
      resolve({
        err: response ? 0 : 1,
        mess: "The job was update successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteJob = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Job.destroy({
        where: { id },
      });
      resolve({
        err: response ? 0 : 1,
        mess: "Delete Thanh cong",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
