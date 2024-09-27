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
//edit
export const putUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userData = req.body;
    const response = await services.putUser(id, userData);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting user with ID: ${id}`);
    const response = await services.deleteUser(id);

    if (response.err === 1) return badRequest(response.mess, res);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error deleting user:", error); // Log lỗi
    return InternalServerError(res);
  }
};
