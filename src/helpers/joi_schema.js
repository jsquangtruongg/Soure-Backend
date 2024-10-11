import Joi from "joi";

export const email = Joi.string().pattern(new RegExp("gmail.com$")).required();

export const password = Joi.string().min(6).required();

export const firstName = Joi.string().required();

export const lastName = Joi.string().required();

export const title = Joi.string().required();

export const price = Joi.number().required();

export const image = Joi.string().uri().required();

export const category_code = Joi.string().uppercase().alphanum().required();

export const content = Joi.string().required();

export const user_id = Joi.string().uppercase().alphanum().required();

export const JobCategory_id = Joi.number().required();
