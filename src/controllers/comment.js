import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
import io from "../../index";
export const createComment = async (req, res) => {
  try {
    const { content, job_id, user_id } = req.body;

    const response = await services.createComment({
      content,
      job_id,
      user_id,
    });

    if (response.err === 1) return badRequest("ERROR", res);
    io.emit("new comment", response.data);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error occurred during job creation:", error);
    return InternalServerError(res);
  }
};

export const getAllCommentJob = async (req, res) => {
  try {
    const response = await services.getCommentJobAll(req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
