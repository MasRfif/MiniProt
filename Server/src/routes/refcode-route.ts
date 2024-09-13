import express from "express";
import { enterRefCode } from "../controllers/refcode-controller";
import { verifyToken } from "../middlewares/auth-middleware";

const router = express.Router();
router.route("/").post(enterRefCode);

export default router;
