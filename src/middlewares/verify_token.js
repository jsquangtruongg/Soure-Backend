import jwt from "jsonwebtoken";
import { NotAuth } from "./handle_error";
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return NotAuth("Require Authorization", res);
  const accessToken = token.split(" ")[1];
  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) return NotAuth("Access token may be expired or invalid", res);

    req.user = user;
    next();
  });
};
export default verifyToken;
