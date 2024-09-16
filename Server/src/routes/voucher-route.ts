import express from "express";
import { getVoucherbyId } from "../controllers/voucher-controller";

const router = express.Router();

router.route("/").get(getVoucherbyId);

export default router;
