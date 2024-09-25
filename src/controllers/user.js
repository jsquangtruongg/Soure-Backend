import * as services from "../services";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
// import { email, password } from "../helpers/joi_schema";
// import Joi from "joi";
export const getCurrent = async (req, res) => {
  try {
    const { id } = req.user;

    const response = await services.GetOne(id);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const response = await services.getAllUser();
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
