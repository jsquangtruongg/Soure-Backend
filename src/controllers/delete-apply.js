import { badRequest, InternalServerError } from "../middlewares/handle_error";
import * as services from "../services";

export const getAllDeleteApply = async (req, res) => {
  try {
    const response = await services.getAllDeleteApply();
    if (response === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
