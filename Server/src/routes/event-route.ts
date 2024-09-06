import express, { Router } from "express";
import { CreateEvent, deleteEvents, editEvent, getAllEvent, getSingleEvent } from "../controllers/event-controller";

const router = express.Router();

router.route("/").get(getAllEvent);
router.route("/:id").get(getSingleEvent);
router.route("/postEvent").post(CreateEvent);
router.route("/editEvent/:id").put(editEvent);
router.route("/deleteEvent/:id").delete(deleteEvents);

export default router;
