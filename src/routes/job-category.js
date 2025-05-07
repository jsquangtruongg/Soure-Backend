import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import uploadCloud from "../middlewares/uploader";

const router = express.Router();
router.use(verifyToken);
router.post("/",uploadCloud.single("img"), controllers.CreateJobCategory);
router.get("/", controllers.getAllJobCategory);
router.get("/id", controllers.getIdJobCategory);
router.delete("/:id", controllers.deleteJobCategory);
router.put("/:id", controllers.updateJobCategory);
module.exports = router;
