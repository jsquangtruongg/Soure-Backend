import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
const router = express.Router();
router.use(verifyToken);
router.get("/", controllers.getAllBlogCategory);
router.get("/id", controllers.getIdBlogCategory);
router.put("/category/:id", controllers.updateBlogCategory);
router.delete("/category/:id", controllers.deleteBlogCategory);
router.post("/", controllers.postBlogCategory);

module.exports = router;
