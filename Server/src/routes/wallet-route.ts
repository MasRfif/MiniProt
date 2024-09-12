import express from "express";
import { getwalletById, topUpWalletbyid } from "../controllers/wallet-controller";

const router = express.Router();

router.route("/").get(getwalletById);
router.route("/topUp").put(topUpWalletbyid);

export default router;
