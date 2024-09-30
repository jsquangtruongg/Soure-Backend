import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
export const getAllBlog = async (req, res) => {
  try {
    const response = await services.getAllBlog();
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const createBlog = async (req, res) => {
  try {
    const response = await services.createBlog(req.body);
    if (response.err === 1) return badRequest("ERROR", res);

    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const getIdBlog = async (req, res) => {
  const { blog_category_id } = req.query;
  console.log(req.query);
  if (!blog_category_id) return badRequest("ERROR", res);
  try {
    const response = await services.getIdBlog(blog_category_id);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting blog with ID: ${id}`);
    const response = await services.updateBlog(id, req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return InternalServerError(res);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteBlog(id);

    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
