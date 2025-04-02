import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
const cloudinary = require("cloudinary").v2;
export const createJob = async (req, res) => {
  try {
    const filData = req.file;
    const { id, content, user_id, jobCategory_id, salary, title, like_count } =
      req.body;

    const response = await services.createJob({
      id,
      content,
      user_id,
      jobCategory_id,
      fileData: filData || null,
      salary,
      title,
      like_count,
    });

    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error occurred during job creation:", error);
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
  const { id } = req.params;
  if (!id) return badRequest("ERROR", res);
  try {
    const response = await services.getIdJobAPI(id);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
