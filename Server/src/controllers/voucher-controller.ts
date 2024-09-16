import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export async function getVoucherbyId(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const voucher = await prisma.voucher.findUnique({
      where: {
        id: +id,
      },
    });

    if (!voucher) res.status(404).json({ message: "voucher not found" });

    res.status(201).json({ message: voucher });
  } catch (error) {
    next(error);
  }
}
