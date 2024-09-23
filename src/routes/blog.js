import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
const router = express.Router();
router.use(verifyToken);
router.get("/", controllers.getAllBlog);
router.post("/", controllers.createBlog);
router.get("/id", controllers.getIdBlog);

module.exports = router;
