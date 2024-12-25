import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";

export const createJob = async (req, res) => {
  try {
    const response = await services.createJob(req.body);
    if (response.err === 1) return badRequest("ERROR", res);

    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getAllJob = async (req, res) => {
  try {
    const response = await services.getAllJob();
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
