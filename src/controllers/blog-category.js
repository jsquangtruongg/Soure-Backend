import { response } from "express";
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

export const postBlogCategory = async (req, res) => {
  try {
    const response = await services.createBlogCategory(req.body);
    if (response.err === 1) return badRequest("ERROR", res);
    return res.status(200).json(response);
  } catch (error) {
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
