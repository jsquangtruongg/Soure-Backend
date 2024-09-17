import * as services from "../services";
import { InternalServerError, badRequest } from "../middlewares/handle_error";
import { email, password, firstName, lastName } from "../helpers/joi_schema";
import Joi from "joi";
export const register = async (req, res) => {
  try {
    const { error } = Joi.object({
      firstName,
      lastName,
      email,
      password,
    }).validate(req.body);
    if (error) return badRequest(error.details[0]?.message, res);

    const response = await services.register(req.body);
    if (response.err === 1) return badRequest(response.mes, res);

    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};

export const login = async (req, res) => {
  try {
    const { error } = Joi.object({
      email,
      password,
    }).validate(req.body);
    if (error) return badRequest(error.details[0]?.message, res);
    const response = await services.login(req.body);
    if (response.err === 1) return badRequest(response.mes, res);
    return res.status(200).json(response);
  } catch (error) {
    return InternalServerError(res);
  }
};
