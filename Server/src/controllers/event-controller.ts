import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

// get single event
export async function getSingleEvent(req: Request, res: Response) {
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
    res.status(500).json({ message: "cannot get the event" });
  }
}

// show all the events
export async function getAllEvent(req: Request, res: Response) {
  try {
    const acara = await prisma.events.findMany();
    res.status(200).json({ data: acara });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while fetching events" });
  }
}

// create event
export async function CreateEvent(req: Request, res: Response) {
  try {
    const { eventName, price, location, description, availableSeat, eventTypeId } = req.body;

    await prisma.events.create({
      data: {
        eventName,
        price,
        description,
        location,
        availableSeat,
        eventTypeId,
      },
    });
    res.status(201).json({ message: "post created" });
  } catch (error) {
    console.error(error);
  }
}

// edit event
export async function editEvent(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { eventName, price, location, description, availableSeat, eventTypeId } = req.body;

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
    res.status(500).json({ message: "server bad" });
  }
}

// delete event
export async function deleteEvents(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await prisma.events.delete({
      where: {
        id: +id,
      },
    });

    res.status(201).json({ message: "user deleted" });
  } catch (error) {
    console.error(error);
  }
}
