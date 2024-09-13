import express, { Router } from "express";
import {
  createEvent,
  deleteEvents,
  editEvent,
  getAllEvent,
  getSingleEvent,
} from "../controllers/event-controller";

import { uploader } from "../middlewares/uploader-middleware";
import { adminGuard } from "../middlewares/auth-middleware";

const router = express.Router();

const upload = uploader();

//router.use(adminGuard);
router.route("/").get(getAllEvent).post(upload.single("image"), createEvent);
router.route("/:id").get(getSingleEvent).put(editEvent).delete(deleteEvents);

export default router;
