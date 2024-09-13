import express from "express";
import { createTransaction, deleteTransaction, getTransactionById, getTransactions } from "../controllers/transaction-controller";

const router = express.Router();

router.route("/").post(createTransaction).get(getTransactions);
router.route("/id").get(getTransactionById).delete(deleteTransaction);

export default router;
