import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import uploadCloud from "../middlewares/uploader";
const router = express.Router();
router.use(verifyToken);
router.get("/", controllers.getAllBlogCategory);
router.get("/id", controllers.getIdBlogCategory);
router.put("/category/:id", controllers.updateBlogCategory);
router.delete("/category/:id", controllers.deleteBlogCategory);
router.post("/", uploadCloud.single("img"), controllers.postBlogCategory);

module.exports = router;
