import * as controllers from "../controllers";

const express = require("express");
const { default: verifyToken } = require("../middlewares/verify_token");

const router = express.Router();
router.use(verifyToken);
router.get("/", controllers.getAllBrowseApplyManager);
router.post("/", controllers.createBrowseApplyManager);
module.exports = router;
