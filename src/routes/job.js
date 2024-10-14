import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import uploadCloud from "../middlewares/uploader";

const router = express.Router();
router.use(verifyToken);
router.post("/", uploadCloud.single("img"), controllers.createJob);
router.get("/", controllers.getAllJob);
router.put("/:id", controllers.updateJob);
router.delete("/:id", controllers.deleteJob);
router.get("/id", controllers.getIdJob);
module.exports = router;
