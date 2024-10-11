import { where } from "sequelize";
import db from "../models";
import moment from "moment";
import { Op } from "sequelize";
const cloudinary = require("cloudinary").v2;
export const createJob = ({ content, user_id, JobCategory_id, fileData }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Job.create({
        content,
        img: fileData?.path,
        user_id,
        JobCategory_id,
      });

      if (response) {
        resolve({
          err: 0,
          mess: "The Job was created successfully",
        });
      } else {
        resolve({
          err: 1,
          mess: "Job creation failed",
        });
      }

      if (fileData && !response) cloudinary.uploader.destroy(fileData.filename);
    } catch (error) {
      reject(error);
      if (fileData) cloudinary.uploader.destroy(fileData.filename);
    }
  });

export const getAllJob = (content, createdAt, lastName, body) =>
  new Promise(async (resolve, reject) => {
    try {
      let queryConditions = {};
      console.log("Initial query conditions:", queryConditions);
      if (content) {
        queryConditions.content = { [Op.substring]: content };
      }
      if (createdAt) {
        const startDate = moment(createdAt).startOf("day").toISOString();
        const endDate = moment(createdAt).endOf("day").toISOString();

        queryConditions.createdAt = {
          [Op.between]: [startDate, endDate],
        };
      }

      if (body) {
        queryConditions = { ...queryConditions, ...body };
      }

      const response = await db.Job.findAll({
        where: queryConditions,
        include: [
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
        mess: "The Job was create successfully",
        data: response,
      });
    } catch (error) {
      // console.log("first", error);
      console.log("log", error);
      reject(error);
    }
  });

export const updateJob = (id, jobData) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Job.findOne({
        where: { id },
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "firstName", "lastName"],
          },
        ],
      });
      await response.update(jobData);
      resolve({
        err: response ? 0 : 1,
        mess: "The job was update successfully",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const deleteJob = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Job.destroy({
        where: { id },
      });
      resolve({
        err: response ? 0 : 1,
        mess: "Delete Thanh cong",
        data: response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getIdJobAPI = (jobCategory_id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Job.findAll({
        where: { jobCategory_id },
        include: [
          {
            model: db.User,
            as: "userData",
            attributes: ["id", "email", "firstName", "lastName"],
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
