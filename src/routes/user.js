import * as controllers from "../controllers";
import express from "express";
import verifyToken from "../middlewares/verify_token";
import { isAdmin, isModeratorOrAdmin } from "../middlewares/verify_roles";
const router = express.Router();
//PUBLIC ROUTES

// PRIVATE ROUTES
router.use(verifyToken);

router.get("/", controllers.getCurrent);
router.use(isAdmin);
router.get("/users", controllers.getAllUser);
// Kiểm tra quyền addmin
router.use(isModeratorOrAdmin);
router.get("/info-role-admin", controllers.getCurrent);
module.exports = router;
