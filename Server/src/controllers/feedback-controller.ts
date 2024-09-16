import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export async function createDescription(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const { text, userId, eventId } = req.body;
    const desc = await prisma.feedback.create({
      data: {
        text,
        userId,
        eventId,
      },
    });

    res.status(201).json({ Message: desc });
  } catch (error) {
    next(error);
  }
}
