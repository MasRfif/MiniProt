import express from "express";
import {
  confirmEmail,
  login,
  logout,
  register,
} from "../controllers/auth-controller";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/confirm-email").get(confirmEmail);
router.route("/logout").get(logout);

export default router;
