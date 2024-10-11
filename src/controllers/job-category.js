import { response } from "express";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
export const CreateJobCategory = async (req, res) => {
  try {
    const response = await services.createJobCategory(req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getAllJobCategory = async (req, res) => {
  try {
    const response = await services.getAllJobCategory(req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const deleteJobCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteJobCategoryAPI(id);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getIdJobCategory = async (req, res) => {
  const { id } = req.query;
  if (!id) return badRequest("ERROR", res);
  try {
    const response = await services.getIdJobCategoryAPI(id);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
