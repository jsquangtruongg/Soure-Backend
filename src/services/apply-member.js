import { where } from "sequelize";
import db from "../models";
import { date } from "joi";

export const createApplyMember = ({
  content,
  job_id,
  user_id,
  apply_id,
  userApply_id,
}) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.ApplyMember.create({
        content,
        user_id,
        job_id,
        apply_id,
        userApply_id,
      });
      if (response) {
        resolve({
          err: 0,
          mess: "Tao thanh cong",
        });
      } else {
        resolve({
          err: 1,
          mess: "Tao that bai",
        });
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });

export const getAllApplyMember = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.ApplyMember.findAll({
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
            model: db.Apply,
            as: "Applies",
            attributes: ["id", "fullName", "email", "phone"],
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
        mess: "Lay tat ca DS thanh cong",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteAppLyMember = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.ApplyMember.destroy({
        where: { id },
      });
      resolve({
        err: response ? 0 : 1,
        mess: "Tao thanh cong",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });
};
