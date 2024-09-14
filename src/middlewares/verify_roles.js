import { NotAuth } from "./handle_error";

export const isAdmin = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== "R1") return NotAuth("Require role Admin", res);
  next();
};

export const isModeratorOrAdmin = (req, res, next) => {
  const { role_code } = req.user;
  if (role_code !== "R1" && role_code !== "R2")
    return NotAuth("Require role Admin or Moderator", res);
  next();
};
