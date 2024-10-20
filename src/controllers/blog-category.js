import { InternalServerError, badRequest } from "../middlewares/handle_error";
import * as services from "../services";
import Joi from "joi";
import { image } from "../helpers/joi_schema";
const cloudinary = require("cloudinary").v2;
export const getAllBlogCategory = async (req, res) => {
  try {
    const { title, describe, lastName, ...body } = req.query;

    const response = await services.getAllBlogCategory(
      title,
      describe,
      lastName,
      body
    );

    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const postBlogCategory = async (req, res) => {
  try {
    const filData = req.file; // filData chứa thông tin file đã upload

    const { title, describe, user_id } = req.body;

    const { error } = Joi.object({
      image,
    }).validate({ image: filData?.path });

    if (error) {
      if (filData) cloudinary.uploader.destroy(filData.filename);
      return badRequest(error.details[0].message, res);
    }

    // Truyền đúng fileData là filData vào hàm createBlogCategory
    const response = await services.createBlogCategory({
      title,
      describe,
      user_id,
      fileData: filData, // Truyền đúng fileData từ req.file
    });
    console.log("Kết quả trả về từ DB: ", response);

    if (response.err === 1) return badRequest("ERROR", res);

    return res.status(200).json(response);
  } catch (error) {
    console.error("Error occurred during blog category creation:", error);
    return InternalServerError(res);
  }
};

export const getIdBlogCategory = async (req, res) => {
  const { id } = req.query;
  if (!id) return badRequest("ERROR", res);
  try {
    const response = await services.getIdBlogCategory(id);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const updateBlogCategory = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting blog with ID: ${id}`);
    const response = await services.updateBlogCategory(id, req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return InternalServerError(res);
  }
};

export const deleteBlogCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await services.deleteBlogCategory(id);

    if (response.res === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
