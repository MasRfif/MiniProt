import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export async function createTicket(req: Request, res: Response, next: NextFunction) {
  try {
    const { tixName, price, qty, d } = req.body;
    await prisma.tickets.create({
      data: {
        tixName,
        price,
        qty,
      },
    });
    res.status(201).json({ message: "ticket is created" });
  } catch (error) {
    next(error);
  }
}

export async function getTickedByid() {}
