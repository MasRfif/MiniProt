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
    //console.log(refCodeRecord);

    //dr middleware
    const userId = (req as any).user.userId; //pastikan middleware auth jalan
    //console.log(userId);

    //update saldo pemilik
    await prisma.wallet.updateMany({
      where: { userId: refCodeRecord.userId },
      data: {
        points: {
          increment: 10000,
        },
      },
    });

    await prisma.voucher.create({
      data: {
        description: "Welcome Voucher",

        discount: 10, //nnt d ubah 10%

        expireDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000),
        userId: userId,
      },
    });

    res.status(200).json({ message: "Successfully redeemed the code!" });
  } catch (error) {
    next(error);
  }
}
