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
    const { id } = req.params;
    const { saldo } = req.body;

    // Find the wallet by user ID
    const wallet = await prisma.wallet.findUnique({
      where: { id: +id },
    });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    // Update the wallet saldo
    const updatedWallet = await prisma.wallet.update({
      where: { id: +id },
      data: {
        saldo: wallet.saldo + saldo, // Increment the current balance by the top-up amount
      },
    });

    res.status(200).json({ message: "Wallet successfully topped up", wallet: updatedWallet });
  } catch (error) {
    next(error);
  }
}
