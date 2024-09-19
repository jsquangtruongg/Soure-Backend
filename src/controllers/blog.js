import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
export const createBlog = async (req, res) => {
  try {
    const response = await services.createBlog(req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    console.log(
      "%csrc/controllers/blog.js:7 response",
      "color: #007acc;",
      response
    );
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
