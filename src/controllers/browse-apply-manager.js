import { json } from "sequelize";
import { badRequest, InternalServerError } from "../middlewares/handle_error";
import * as services from "../services";

export const getAllBrowseApplyManager = async (req, res) => {
  try {
    const response = await services.getAllBrowseApplyManager();
    if (response === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const createBrowseApplyManager = async (req, res) => {
  try {
    const response = await services.createBrowseApplyManager(req.body);
    if (response === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
