import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

// Create a new transaction
export async function createTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { walletId, eventId, quantity, usePoint, voucherId } = req.body;

    // Fetch the wallet to check the saldo
    const wallet = await prisma.wallet.findUnique({
      where: { id: walletId },
    });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    // Fetch the event to get the price
    const event = await prisma.events.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      return res.status(404).json({ message: "event not found" });
    }

    let voucher = null;
    if (voucherId) {
      voucher = await prisma.voucher.findUnique({
        where: { id: +voucherId },
      });
    }

    // const totalCost = voucher
    //   ? event.price * quantity -
    //     (event.price * quantity * voucher.discount) / 100
    //   : event.price * quantity;

    /*
    const totalCost = event.price * quantity;

    // Check if the user has enough saldo
    if (
      usePoint
        ? wallet.saldo + wallet.points < totalCost
        : wallet.saldo < totalCost
    ) {
      return res.status(400).json({ message: "Insufficient saldo" });
    }

    let x = 0;
    let y = 0;

    if (usePoint) {
      if (wallet.points - totalCost > 0) {
        x = wallet.points - totalCost;
        y = wallet.saldo - x;
      } else {
        x = wallet.points - totalCost;
        y = wallet.saldo + x;
      }
    } else {
      x = wallet.points - totalCost;
      y = wallet.saldo - x;
    }

    // Deduct saldo from the wallet
    await prisma.wallet.update({
      where: { id: walletId },
      data: {
        saldo: y,
        points: x < 0 ? 0 : x,
      },
    });
    */

    const totalCost = event.price * quantity;

    // Check if the user has enough saldo
    if (
      usePoint
        ? wallet.saldo + wallet.points < totalCost
        : wallet.saldo < totalCost
    ) {
      return res.status(400).json({ message: "Insufficient saldo" });
    }

    let pointsAfterDeduction = wallet.points;
    let saldoAfterDeduction = wallet.saldo;

    if (usePoint) {
      if (wallet.points >= totalCost) {
        // Points are enough to cover the total cost
        pointsAfterDeduction = wallet.points - totalCost;
        saldoAfterDeduction = wallet.saldo; // No change in saldo
      } else {
        // Points are not enough, subtract remaining cost from saldo
        const remainingCost = totalCost - wallet.points;
        pointsAfterDeduction = 0; // All points used up
        saldoAfterDeduction = wallet.saldo - remainingCost;
      }
    } else {
      // Not using points, subtract the total cost from saldo directly
      saldoAfterDeduction = wallet.saldo - totalCost;
    }

    // Deduct saldo and points from the wallet
    await prisma.wallet.update({
      where: { id: walletId },
      data: {
        saldo: saldoAfterDeduction,
        points: pointsAfterDeduction,
      },
    });

    // create ticket
    const ticket = await prisma.tickets.create({
      data: {
        tixName: `${event.eventName} Ticket`,
        // price: Number(event.price),
        qty: Number(quantity),
        user: {
          connect: { id: wallet.userId },
        },
      },
    });

    // Create the transaction
    const transaction = await prisma.transaction.create({
      data: {
        walletId,
        ticketId: ticket.id,
        quantity,
      },
    });

    if (voucher) {
      await prisma.voucher.delete({
        where: { id: +voucherId },
      });
    }

    res.status(201).json({ message: "Transaction created", transaction });
  } catch (error) {
    next(error);
  }
}

// Get all transactions for a wallet
export async function getTransactions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // const { walletId } = req.params;
    const transactions = await prisma.transaction.findMany();

    if (!transactions || transactions.length === 0) {
      return res.status(404).json({ message: "No transactions found" });
    }

    res.status(200).json({ data: transactions });
  } catch (error) {
    next(error);
  }
}

// Get a single transaction by ID
export async function getTransactionById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    const transaction = await prisma.transaction.findUnique({
      where: { id: parseInt(id) },
      include: {
        Wallet: true,
        Tickets: true,
      },
    });

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ transaction });
  } catch (error) {
    next(error);
  }
}

// Delete a transaction
export async function deleteTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    //blm handle error not found
    const transaction = await prisma.transaction.delete({
      where: { id: parseInt(id) },
    });

    res.status(200).json({ message: "Transaction deleted", transaction });
  } catch (error) {
    next(error);
  }
}
