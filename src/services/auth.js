import db from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { raw } from "mysql2";
const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8));

export const register = ({ firstName, lastName, email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { email },
        defaults: {
          firstName,
          lastName,
          email,
          password: hashPassword(password),
        },
      });

      const token = response[1]
        ? jwt.sign(
            {
              id: response[0].id,
              mail: response[0].email,
              role_code: response[0].role_code,
            },
            process.env.JWT_SECRET,
            { expiresIn: "5d" }
          )
        : null;
      resolve({
        err: response[1] ? 0 : 1,
        mes: response[1] ? "Register is successfully" : "email already exists",
        access_token: token ? `Bearer ${token}` : token,
      });
    } catch (error) {
      console.log(
        '%csrc/controllers/auth.js:16 "object"',
        "color: #007acc;",
        "object",
        error
      );
      reject(error);
    }
  });
export const login = ({ email, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { email },
        raw: true,
      });
      const isChecked =
        response && bcrypt.compareSync(password, response.password);
      const token = isChecked
        ? jwt.sign(
            {
              id: response.id,
              mail: response.email,
              role_code: response.role_code,
            },
            process.env.JWT_SECRET,
            { expiresIn: "5d" }
          )
        : null;

      resolve({
        err: token ? 0 : 1,
        mes: token
          ? "Login is successfully"
          : response
          ? "Password is wrong"
          : "email does not exist",
        access_token: token ? `Bearer ${token}` : token,
      });
    } catch (error) {
      reject(error);
    }
  });
