import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
const cloudinary = require("cloudinary").v2;
import { image } from "../helpers/joi_schema";
import Joi from "joi";
export const getAllBlog = async (req, res) => {
  try {
    const { lastName, content, title, ...body } = req.query;
    const response = await services.getAllBlog(title, content, lastName, body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const createBlog = async (req, res) => {
  try {
    const filData = req.file;
    const { title, content, user_id, blog_category_id } = req.body;
    const response = await services.createBlog({
      title,
      content,
      fileData: filData || null,
      user_id,
      blog_category_id,
    });
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error occurred during job creation:", error);
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
