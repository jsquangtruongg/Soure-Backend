import Joi from "joi";
import { image } from "../helpers/joi_schema";
import { badRequest, InternalServerError } from "../middlewares/handle_error";
const cloudinary = require("cloudinary").v2;
import * as services from "../services";

export const getAllApply = async (req, res) => {
  try {
    const response = await services.getAllApply();
    if (response === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const createApply = async (req, res) => {
  try {
    const response = await services.createApply(req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return InternalServerError(res);
  }
};

export const getIdApply = async (req, res) => {
  const { id } = req.params;
  if (!id) return badRequest("ERROR", res);
  try {
    const response = await services.getIdApply(id);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return InternalServerError(res);
  }
};
