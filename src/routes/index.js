import user from "./user";
import auth from "./auth";
import insert from "./insert";
import blog from "./blog";
import getAllBlogCategory from "./blog-category";
import getIdBlogCategory from "./blog-category";
import { NotFound } from "../middlewares/handle_error";

const initRoutes = (app) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/insert", insert);
  app.use("/api/v1/blog", blog);
  app.use("/api/v1/blog-category", getAllBlogCategory);
  app.use("/api/v1/blog-category/id", getIdBlogCategory);

  app.use(NotFound);
};
module.exports = initRoutes;
