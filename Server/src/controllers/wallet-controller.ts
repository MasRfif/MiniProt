import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export async function getwalletById(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const wallet = await prisma.wallet.findUnique({
      where: {
        id: +id,
      },
    });

    if (!wallet) res.status(404).json({ message: "wallet not found" });

    res.status(201).json({ message: wallet });
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
