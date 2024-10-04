import { Op } from "sequelize";
import db from "../models";

export const createJobCategory = ({ title }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.JobCategory.create({
        title,
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
            model: db.Blog,
            as: "blogs",
            attributes: ["id", "title", "content"],
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

