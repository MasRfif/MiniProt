import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export async function getStatistic(req: Request, res: Response, next: NextFunction) {
  try {
    const { ticketId, eventId } = req.body;

    const stats = await prisma.statistic.findMany({
      where: {
        ticketId: ticketId,
        eventId: eventId,
      },
    });

    res.status(200).json({
      message: "Statistics fetched successfully",
      data: stats,
    });
  } catch (error) {
    next(error);
  }
}
