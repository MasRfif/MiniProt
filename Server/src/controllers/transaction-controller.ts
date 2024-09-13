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
    const { walletId, ticketId, quantity } = req.body;

    // Fetch the wallet to check the saldo
    const wallet = await prisma.wallet.findUnique({
      where: { id: walletId },
    });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    // Fetch the ticket to get the price
    const ticket = await prisma.tickets.findUnique({
      where: { id: ticketId },
    });

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    const totalCost = ticket.price * quantity;

    // Check if the user has enough saldo
    if (wallet.saldo < totalCost) {
      return res.status(400).json({ message: "Insufficient saldo" });
    }

    // Deduct saldo from the wallet
    await prisma.wallet.update({
      where: { id: walletId },
      data: { saldo: wallet.saldo - totalCost },
    });

    // Create the transaction
    const transaction = await prisma.transaction.create({
      data: {
        walletId,
        ticketId,
        quantity,
      },
    });

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
