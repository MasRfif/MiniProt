// import { Prisma, PrismaClient } from "@prisma/client";
// import { NextFunction, Request, Response } from "express";

// const prisma = new PrismaClient();

// async function transaction(req: Request, res: Response, next: NextFunction) {
//   try {
//     const { id } = req.params;
//     const { ticket_qty, price, qty } = req.body;
//     const { date, walletID, nominal } = req.body;

//     await prisma.tickets.update({
//       data: {
//         qty: qty - ticket_qty,
//       },
//       where: {
//         id: +id,
//       },
//     });

//     const wallet = await prisma.wallet.findUnique({
//       where: {
//         userID: req.user.id,
//       },
//     });

//     await prisma.wallet.update({
//       where: {
//         id: +id,
//       },
//       data: {
//         saldo: wallet?.saldo! - ticket_qty * price,
//       },
//     });

//     await prisma.transaction.create({
//       data: {
//         date,
//         walletID,
//         nominal,
//       },
//     });
//   } catch (error) {
//     next(error);
//   }
// }
