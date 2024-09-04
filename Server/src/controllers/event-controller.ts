import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

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
  }
}
