import express from "express";
import { getStatistic } from "../controllers/statistic-controller";

const router = express.Router();

router.route("/").get(getStatistic);

export default router;
