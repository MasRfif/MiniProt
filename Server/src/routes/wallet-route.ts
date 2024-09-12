import express from "express";
import { getwalletById, topUpWalletbyid } from "../controllers/wallet-controller";

const router = express.Router();

router.route("/:id").get(getwalletById);
router.route("/topUp/:id").put(topUpWalletbyid);

export default router;
