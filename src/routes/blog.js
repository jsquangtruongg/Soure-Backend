import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isModeratorOrAdmin } from "../middlewares/verify_roles";
const router = express.Router();
router.use(verifyToken);
router.get("/", controllers.getAllBlog);
router.get("/id", controllers.getIdBlog);
router.use(isModeratorOrAdmin);
router.post("/", controllers.createBlog);
router.put("/blogs/:id", controllers.updateBlog);
router.delete("/blogs/:id", controllers.deleteBlog);
module.exports = router;
    