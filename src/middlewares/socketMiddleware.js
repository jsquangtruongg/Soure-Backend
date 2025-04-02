export const socketMiddleware = (io) => (req, res, next) => {
  req.io = io; // Gán io vào request
  next();
};
