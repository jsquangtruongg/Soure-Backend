import * as services from "../services";
import { badRequest, InternalServerError } from "../middlewares/handle_error";
export const createApplyMember = async (req, res) => {
  try {
    const response = await services.createApplyMember(req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getAllApplyMember = async (req, res) => {
  try {
    const response = await services.getAllApplyMember();
    if (response === 1) return badRequest("ERROR", res);

    return res.status(200).json(response);
  } catch (error) {
    console.log("adc", error);
    return InternalServerError(res);
  }
};

export const deleteAppLyMember = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteAppLyMember(id);
    if (response === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
