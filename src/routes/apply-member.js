import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";

const router = express.Router();
router.use(verifyToken);
router.get("/", controllers.getAllApplyMember);
router.post("/", controllers.createApplyMember);
router.delete("/:id", controllers.deleteAppLyMember);
module.exports = router;
