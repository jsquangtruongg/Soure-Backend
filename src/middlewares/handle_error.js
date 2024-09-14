import createError from "http-errors";
export const badRequest = (err, res) => {
  const error = createError.BadRequest(err);
  return res.status(error.status).json({
    err: 1,
    mess: error.message,
  });
};

export const InternalServerError = (res) => {
  const error = createError.InternalServerError();
  return res.status(error.status).json({
    err: 1,
    mess: error.message,
  });
};

export const NotFound = (req, res) => {
  const error = createError.NotFound("This route is not defined");
  return res.status(error.status).json({
    err: 1,
    mess: error.message,
  });
};

export const NotAuth = (err, res) => {
  const error = createError.Unauthorized(err);
  return res.status(error.status).json({
    err: 1,
    mess: error.message,
  });
};
