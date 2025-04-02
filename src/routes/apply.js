import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import uploadCloud from "../middlewares/uploader";
const router = express.Router();
router.use(verifyToken);
router.get("/", controllers.getAllApply);
router.post("/", uploadCloud.single("img"), controllers.createApply);
router.get("/:id", controllers.getIdApply);
router.delete("/:id", controllers.deleteApply);

module.exports = router;
