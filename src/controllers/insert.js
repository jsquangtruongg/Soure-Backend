import * as services from "../services";
import { InternalServerError, badRequest } from "../middlewares/handle_error";

export const insertData = async (req, res) => {
  try {
    const response = await services.insertData();
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
