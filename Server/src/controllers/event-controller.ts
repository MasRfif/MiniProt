import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import cloudinary from "../config/cloudinary";
import fs from "fs/promises";

const prisma = new PrismaClient();

//get all events
export async function getAllEvent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { page = 1, limit = 2 /*10*/ } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    const events = await prisma.events.findMany({
      skip: offset,
      take: Number(limit),
    });

    const totalEvents = await prisma.events.count();

    return res.status(200).json({
      data: events,
      meta: {
        totalEvents,
        currentPage: Number(page),
        totalPages: Math.ceil(totalEvents / Number(limit)),
      },
    });
  } catch (error) {
    next(error);
    // res
    //   .status(500)
    //   .json({ message: "An error occurred while fetching events. Good Luck!" });
  }
}

// get single event
export async function getSingleEvent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const post = await prisma.events.findUnique({
      where: {
        id: +id,
      },
    });

    if (!post) res.status(404).json({ message: "Post not found" });

    res.status(201).json({ message: post });
  } catch (error) {
    next(error);
    // res.status(500).json({ message: "Cannot get the event" });
  }
}

export async function createEvent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const {
      eventName,
      price,
      location,
      description,
      date,
      time,
      availableSeat,
      eventTypeId,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const cloudinaryData = await cloudinary.uploader.upload(req.file.path, {
      folder: "images",
    });

    await prisma.events.create({
      data: {
        eventName,
        price: +price,
        description,
        location,
        date,
        time,
        availableSeat: +availableSeat,
        eventTypeId: +eventTypeId,
        imageUrl: cloudinaryData.secure_url,
      },
    });

    fs.unlink(req.file.path);

    res.status(201).json({ message: "Event created" });
  } catch (error) {
    next(error);
    // console.error(error);
  }
}

// edit event
export async function editEvent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const {
      eventName,
      price,
      location,
      description,
      availableSeat,
      eventTypeId,
    } = req.body;

    const change = await prisma.events.update({
      where: {
        id: +id,
      },
      data: {
        eventName,
        price,
        location,
        description,
        availableSeat,
        eventTypeId,
      },
    });
    res.status(201).json({ message: change });
  } catch (error) {
    next(error);
    // res.status(500).json({ message: "server bad lolol" });
  }
}

// delete event
export async function deleteEvents(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    await prisma.events.delete({
      where: {
        id: +id,
      },
    });

    res.status(201).json({ message: "Event Deleted" });
  } catch (error) {
    next(error);
    // console.error(error);
  }
}
