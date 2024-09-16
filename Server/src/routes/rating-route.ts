import express from "express";
import { rating } from "../controllers/rating-controller";

const router = express.Router();

router.route("/").post(rating);

export default router;
