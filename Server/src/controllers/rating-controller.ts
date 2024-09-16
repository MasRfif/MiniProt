import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export async function rating(req: Request, res: Response, next: NextFunction) {
  try {
    const { rate, userId, eventId } = req.body;

    const event = await prisma.events.findUnique({ where: { id: eventId } });
    const user = await prisma.users.findUnique({ where: { id: userId } });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newRating = await prisma.rating.create({
      data: {
        rate,
        userId,
        eventId,
      },
    });

    if (rate > 10) {
      return res.status(500).json({ message: "test dlu " });
    }

    res.status(201).json({ message: "Rating successfully created", rating: newRating });
  } catch (error) {
    next(error);
  }
}
