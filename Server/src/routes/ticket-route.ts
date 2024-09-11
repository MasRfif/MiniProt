import express, { Router } from "express";
import { createTicket } from "../controllers/ticket-controller";

const router = express.Router();

router.route("/").post(createTicket);

export default router;
