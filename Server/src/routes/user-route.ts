import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/user-controller";
import { adminGuard } from "../middlewares/auth-middleware";

const router = express.Router();

//router.use(adminGuard);
router.route("/").get(getAllUser);
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

export default router;
