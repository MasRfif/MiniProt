import express from "express";
import { mailtest, register } from "../controllers/auth-controller";

const router = express.Router();

router.route("/register").post(register);
router.route("/test").get(mailtest);

export default router;
