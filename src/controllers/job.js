import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
const cloudinary = require("cloudinary").v2;
export const createJob = async (req, res) => {
  try {
    const filData = req.file;
    const {
      id,
      content,
      user_id,
      jobCategory_id,
      salary,
      title,
      experience,
      location,
      like_count,
      Grade,
      Education,
      positions_needed,
      work_type,
    } = req.body;

    const response = await services.createJob({
      id,
      content,
      user_id,
      jobCategory_id,
      fileData: filData || null,
      salary,
      title,
      experience,
      location,
      like_count,
      Grade,
      Education,
      positions_needed,
      work_type,
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
export const getAllJobs = async (req, res) => {
  try {
    const response = await services.getAllJobsService();
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({
      err: 1,
      mess: "Server error",
    });
  }
};

export const getIdJobs = async (req, res) => {
  try {
    const userId = req.params.id;
    const response = await services.getIdJobsService(userId);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({
      err: 1,
      mess: "Server error",
    });
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
    console.log(response);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
