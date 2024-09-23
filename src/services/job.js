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
