import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export async function getwalletById(req: Request, res: Response, next: NextFunction) {
  try {
    const { saldo, userId } = req.body;

    if (isNaN(saldo)) {
      return res.status(400).json({ message: "kurang masseh saldo mu" });
    }

    const wallet = await prisma.wallet.create({
      data: {
        saldo,
        user: { connect: { id: userId } },
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function topUpWalletbyid(req: Request, res: Response, next: NextFunction) {
  try {
    const { saldo, userId } = req.body;
    const wallet = await prisma.wallet.create({
      data: {
        saldo,
        user: { connect: { id: userId } },
      },
    });
  } catch (error) {
    next(error);
  }
}
