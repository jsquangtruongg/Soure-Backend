import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
export const getAllBlogCategory = async (req, res) => {
  try {
    const response = await services.getAllBlogCategory();
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
