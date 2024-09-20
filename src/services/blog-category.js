import db from "../models";

export const getAllBlogCategory = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.BlogCategory.findAll({
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
