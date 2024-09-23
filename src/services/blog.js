import db from "../models";

export const getAllBlog = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Blog.findAll({
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "email", "firstName", "lastName"],
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
