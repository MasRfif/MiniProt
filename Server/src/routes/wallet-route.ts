import express from "express";
import { getwalletById, topUpWalletbyid } from "../controllers/wallet-controller";

const router = express.Router();

router.route("/").get(getwalletById);
router.route("/").put(topUpWalletbyid);
