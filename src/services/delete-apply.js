import db from "../models";

export const getAllDeleteApply = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.DeleteApply.findAll({
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
