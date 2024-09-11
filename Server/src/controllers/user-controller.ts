import { Prisma, PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";

const prisma = new PrismaClient();

export async function getAllUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const users = await prisma.users.findMany();
    return res.status(200).json({ data: users });
  } catch (error) {
    //console.error(error);
    next(error);
  }
}

export async function getSingleUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const user = await prisma.users.findUnique({
      where: {
        id: Number(id), //semua input yg d masukin user akan berbentuk string
        //id: Number(id)
      },
    });

    return res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
}

//edit user - Note edit profile
export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //Note blm bisa ubah password
  try {
    const { id } = req.params;
    const { email, username } = req.body;

    await prisma.users.update({
      where: {
        id: +id,
      },
      data: {
        username,
        email,
      },
    });

    res.status(200).json({ message: "User updated" });
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;

    await prisma.users.delete({
      where: {
        id: +id,
      },
    });

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
}
