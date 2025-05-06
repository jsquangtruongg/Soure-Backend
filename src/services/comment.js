import { date } from "joi";
import db from "../models";
import { Model, Op, where } from "sequelize";
export const createComment = ({ content, job_id, user_id }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Comment.create({
        content,
        job_id,
        user_id,
      });
      if (response) {
        resolve({
          err: 0,
          mess: "Tao thanh cong",
          date: response,
        });
      } else {
        resolve({
          err: 1,
          mess: "Tao that bai",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getCommentJob = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Comment.findOne({
        where: { id },
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
};

export const getCommentJobAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await db.Comment.findAll({
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
};
