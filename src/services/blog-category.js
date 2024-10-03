import { Op } from "sequelize";
import db from "../models";

export const getAllBlogCategory = (title, describe, lastName, body) =>
  new Promise(async (resolve, reject) => {
    try {
      let queryConditions = {};
      if (title) {
        queryConditions.title = { [Op.substring]: title };
      }
      if (describe) {
        queryConditions.describe = { [Op.substring]: describe };
      }
      if (body) {
        queryConditions = { ...queryConditions, ...body };
      }
      const response = await db.BlogCategory.findAll({
         where: queryConditions,
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
            where: lastName ? { lastName: { [Op.like]: `%${lastName}%` } } : {},
          },
        ],
      });

      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      console.error("Error in getAllBlogCategory:", error);
      console.log(error);
      reject(error);
    }
  });

export const getIdBlogCategory = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.BlogCategory.findOne({
        where: { id },
        include: [
          {
            model: db.Blog,
            as: "blogs",
            attributes: ["id", "title", "content"],
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

export const updateBlogCategory = (id, blogCategoryData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.BlogCategory.findOne({
        where: { id },
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "firstName", "lastName"],
          },
        ],
      });
      await response.update(blogCategoryData);

      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteBlogCategory = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.BlogCategory.destroy({
        where: { id },
      });
      resolve({
        err: response ? 0 : 1,
        mess: "Delete successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createBlogCategory = ({ title, describe, user_id, img }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.BlogCategory.create({
        title,
        describe,
        user_id,
        img,
      });
      resolve({
        err: response ? 0 : 1,
        mess: "Tao blog thanh cong",
      });
    } catch (error) {
      reject(error);
    }
  });
