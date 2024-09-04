import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { compare, genSalt, hash } from "bcrypt"; // salt adalah kunci encrypsi yg d pkai bcrypt
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Resend } from "resend";

const prisma = new PrismaClient();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function register(req: Request, res: Response) {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    // const existingUser = await prisma.users.findUnique({
    //   where: { email },
    // });

    // if (existingUser)
    //   res.status(409).json({ message: "User with this email already exist" });

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    // const userRole = await prisma.roles.findUnique({
    //   where: { id: 2, position: "author" },
    // });

    const newUser = await prisma.users.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
        // roleId: {
        //   connect: { id: userRole!.id },
        //   //connect: { id : 2 }
        // },
        // emailConfirmed: false,
      },
    });

    // Generate confirmation token
    const token = crypto.randomBytes(20).toString("hex");
    const confirmationLink = `http://localhost:${process.env.PORT}/api/v1/auth/confirm-email?token=${token}`;

    await prisma.token.create({
      data: {
        token,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000),
        userId: newUser.id,
      },
    });

    const { data, error } = await resend.emails.send({
      from: "Project Occasion <project.occasion@resend.dev>",
      to: [newUser.email],
      subject: "Email Confirmation (Project Occasion)",
      html: `<strong>Hello, ${
        newUser.firstName + " " + newUser.lastName
      }!</strong>`,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(201).json({ message: "Registered. Please confirm your email" });
  } catch (error) {
    console.error(error);
  }
}

export async function mailtest(req: Request, res: Response) {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["commitdummy@gmail.com"],
    subject: "hello world",
    html: "<strong>it works!</strong>",
  });

  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json({ data });
}
