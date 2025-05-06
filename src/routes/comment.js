import * as controllers from "../controllers";
import express from "express";

import verifyToken from "../middlewares/verify_token";

const router = express.Router();
router.use(verifyToken);

router.post("/", controllers.createComment);
router.get("/get-all-comment", controllers.getAllCommentJob);

module.exports = router;
