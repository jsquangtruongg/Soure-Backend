import db from "../models";
import { Op } from "sequelize";
export const getAllBlog = (title, content, lastName, body) =>
  new Promise(async (resolve, reject) => {
    try {
      let queryConditions = {};
      if (title) {
        queryConditions.title = { [Op.like]: `%${title}%` }; // Thay đổi từ Op.substring sang Op.like
      }
      if (content) {
        queryConditions.content = { [Op.substring]: content };
      }
      if (body) {
        queryConditions = { ...queryConditions, ...body };
      }
      const response = await db.Blog.findAll({
        where: queryConditions,
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "email", "firstName", "lastName"],
            where: lastName ? { lastName: { [Op.like]: `%${lastName}%` } } : {},
          },
          {
            model: db.BlogCategory,
            as: "categoryData",
            attributes: ["title", "describe"],
          },
        ],
      });

      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getIdBlog = (blog_category_id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Blog.findAll({
        where: { blog_category_id },
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "firstName", "lastName"],
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

export const createBlog = ({
  title,
  content,
  img,
  user_id,
  blog_category_id,
  salary,
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Blog.create({
        title,
        content,
        img,
        user_id,
        blog_category_id,
        salary,
      });

      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
      });
    } catch (error) {
      reject(error);
    }
  });

export const updateBlog = (id, blogData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Blog.findOne({
        where: { id },
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "firstName", "lastName"],
          },
        ],
      });
      await response.update(blogData);

      resolve({
        err: response ? 0 : 1,
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteBlog = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Blog.destroy({
        where: { id },
      });
      resolve({
        err: response ? 0 : 1,
        mess: "The delete successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
