import express, { Router } from "express";
import {
  CreateEvent,
  deleteEvents,
  editEvent,
  getAllEvent,
  getSingleEvent,
} from "../controllers/event-controller";

const router = express.Router();

router.route("/").get(getAllEvent).post(CreateEvent);
router.route("/:id").get(getSingleEvent).put(editEvent).delete(deleteEvents);

export default router;
