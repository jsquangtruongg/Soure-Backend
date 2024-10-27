import user from "./user";
import auth from "./auth";
import insert from "./insert";
import blog from "./blog";
import job from "./job";
import blogCategory from "./blog-category";
import apply from "./apply";
import jobCategory from "./job-category";
import ApplyMember from "./apply-member";
import browseApplyManager from "./browse-apply-manager";
import { NotFound } from "../middlewares/handle_error";

const initRoutes = (app) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/insert", insert);
  app.use("/api/v1/blog", blog);
  app.use("/api/v1/blog-category", blogCategory);
  app.use("/api/v1/job", job);
  app.use("/api/v1/job-category", jobCategory);
  app.use("/api/v1/job-apply", apply);
  app.use("/api/v1/apply-member", ApplyMember);
  app.use("/api/v1/browse-apply-manager", browseApplyManager);
  app.use(NotFound);
};
module.exports = initRoutes;
