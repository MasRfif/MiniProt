import express from "express";
import { createDescription } from "../controllers/feedback-controller";

const router = express.Router();

router.route("/").post(createDescription);

export default router;
