import { Op, where } from "sequelize";
import db from "../models";
import { date } from "joi";

export const createJobCategory = ({ title, user_id }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.JobCategory.create({
        title,
        user_id,
      });
      resolve({
        err: response ? 0 : 1,
        mess: "Tao job thanh cong",
      });
    } catch (error) {
      reject(error);
    }
  });

export const getAllJobCategory = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.JobCategory.findAll({
        include: [
          {
            model: db.Job,
            as: "Jobs",
            attributes: ["id", "img", "content"],
          },
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "email", "firstName", "lastName"],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        mess: "The Job was create successfully",
        data: response,
      });
    } catch (error) {
      console.error("Error in getAllBlogCategory:", error);
      console.log(error);
      reject(error);
    }
  });

export const deleteJobCategoryAPI = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.JobCategory.destroy({
        where: { id },
      });
      resolve({
        err: response ? 0 : 1,
        mess: "Xoa Thanh Cong",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
};

export const getIdJobCategoryAPI = (id) =>
  new Promise(async (resolve, reject) => {
    console.log("Fetching JobCategory with ID:", id);
    try {
      const response = await db.JobCategory.findOne({
        where: { id },
        include: [
          {
            model: db.Job,
            as: "Jobs",
            attributes: ["id", "img", "content"],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        mess: "The Job getId successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateJobCategoryAPI = (id, JobCategory) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.JobCategory.findOne({
        where: { id },
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "firstName", "lastName"],
          },
        ],
      });
      await response.update(JobCategory);
      resolve({
        err: response ? 0 : 1,
        mess: "Cap nhap thanh cong",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
