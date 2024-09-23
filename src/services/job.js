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
        mess: "The Blog was create successfully",
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
        mess: "The Blog was create successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
