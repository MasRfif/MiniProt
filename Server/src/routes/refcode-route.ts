import express from "express";
import { enterRefCode, skipRefCode } from "../controllers/refcode-controller";
import { newUserOnly } from "../middlewares/auth-middleware";

const router = express.Router();
router.use(newUserOnly);
router.route("/enter").post(enterRefCode);
router.route("/skip").post(skipRefCode);

export default router;
