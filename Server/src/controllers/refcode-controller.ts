import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export async function enterRefCode(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { refCode } = req.body;
    const refCodeRecord = await prisma.referralCode.findUnique({
      where: { value: refCode.toString() },
    });

    if (
      !refCodeRecord ||
      !refCodeRecord.isActivated ||
      refCodeRecord.expireDate < new Date()
    ) {
      return res.status(400).json({ message: "Invalid or expired code" });
    }

    const userId = (req as any).user.id; //pastikan middleware auth jalan

    //update saldo pemilik
    await prisma.wallet.update({
      where: { id: refCodeRecord.id },
      data: {
        points: {
          increment: 10000,
        },
      },
    });

    await prisma.voucher.create({
      data: {
        description: "Welcome Voucher",
        discount: 0.1, //10%
        expireDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000),
        userId: userId,
      },
    });

    res.status(200).json({ message: "Successfully redeemed the code!" });
  } catch (error) {
    next(error);
  }
}
