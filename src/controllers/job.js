import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
const cloudinary = require("cloudinary").v2;
import Joi from "joi";
import { image, content, user_id, JobCategory_id } from "../helpers/joi_schema";
export const createJob = async (req, res) => {
  try {
    const filData = req.file;
    console.log(filData);
    const { content, user_id, JobCategory_id, salary, title } = req.body;

    console.log("File Data:", filData);
    console.log("Content:", content);
    console.log("User ID:", user_id);
    console.log("Job Category ID:", JobCategory_id);

    const response = await services.createJob({
      content,
      user_id,
      JobCategory_id,
      fileData: filData || null,
      salary,
      title,
    });
    console.log(req.body);
    console.log("abc", response);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error occurred during job creation:", error); // Log chi tiết lỗi
    return InternalServerError(res);
  }
};

export const getAllJob = async (req, res) => {
  try {
    const { content, createdAt, lastName, ...body } = req.query;
    const response = await services.getAllJob(
      content,
      createdAt,
      lastName,
      body
    );
    if (response.err === 1) return badRequest("ERROR", res);

    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting blog with ID: ${id}`);
    const response = await services.updateJob(id, req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteJob(id);
    if (response.res === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getIdJob = async (req, res) => {
  const { jobCategory_id } = req.query;
  if (!jobCategory_id) return badRequest("ERROR", res);
  try {
    const response = await services.getIdJobAPI(jobCategory_id);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
