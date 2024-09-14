import * as services from "../services";
import { InternalServerError, badRequest } from "../middlewares/handle_error";

import { title, image, category_code, price } from "../helpers/joi_schema";
import Joi from "joi";

export const getBooks = async (req, res) => {
  try {
    const response = await services.getBooks(req.query);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
//CREATE

export const createNewBook = async (req, res) => {
  try {
    const fileData = req.file;
    console.log(fileData);
    // const { error } = Joi.object({
    //   title,
    //   image,
    //   category_code,
    //   price,
    // }).validate(req.body);
    // if (error) return badRequest(error.details[0].message, res);
    // const response = await services.createNewBook(req.body);
    return res.status(200).json("OKKK");
  } catch (error) {
    return InternalServerError(res);
  }
};
