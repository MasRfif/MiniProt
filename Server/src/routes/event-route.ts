import express, { Router } from "express";
import {
  createEvent,
  deleteEvents,
  editEvent,
  feedback,
  getAllEvent,
  getAllEventPagination,
  getSingleEvent,
  ratings,
} from "../controllers/event-controller";

import { uploader } from "../middlewares/uploader-middleware";
import { adminGuard } from "../middlewares/auth-middleware";

const router = express.Router();

const upload = uploader();

//router.use(adminGuard);
router
  .route("/")
  .get(getAllEventPagination)
  .post(upload.single("image"), createEvent);
router.route("/all").get(getAllEvent);
router
  .route("/:id")
  .get(getSingleEvent)
  .put(editEvent)
  .post(feedback)
  .delete(deleteEvents);

router.route("/rate/:id").post(ratings);

export default router;
