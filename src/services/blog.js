import db from "../models";

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
