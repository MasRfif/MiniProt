import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { compare, genSalt, hash } from "bcrypt"; // salt adalah kunci encrypsi yg d pkai bcrypt
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Resend } from "resend";

const prisma = new PrismaClient();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { firstName, lastName, username, email, password, roleId } = req.body;
    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser)
      res.status(409).json({ message: "User with this email already exist" });

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    // const userRole = await prisma.roles.findUnique({
    //   where: { id: 2, position: "User" },
    // });

    const newUser = await prisma.users.create({
      data: {
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword,
        role: { connect: { id: Number(roleId) } },
      },
    });

    //generate referral code
    const referralCode = crypto.randomBytes(3).toString("hex");

    await prisma.referralCode.create({
      data: {
        value: referralCode.toUpperCase(),
        userId: newUser.id,
      },
    });

    // Generate confirmation token
    const token = crypto.randomBytes(20).toString("hex");
    const confirmationLink = `http://localhost:${process.env.PORT}/api/v1/auth/confirm-email?token=${token}`;

    await prisma.token.create({
      data: {
        token,
        expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000), //2 hours
        userId: newUser.id,
      },
    });

    const { data, error } = await resend.emails.send({
      from: "Project Occasion <project.occasion@resend.dev>",
      to: [newUser.email],
      subject: "Email Confirmation (Project Occasion)",
      html: `<strong>Hello, ${
        newUser.firstName + " " + newUser.lastName
      }!</strong><p> Please confirm your email by clicking on the following link: <a href="${confirmationLink}">Confirmation Link</a></p>`,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(201).json({ message: "Registered. Please confirm your email" });
  } catch (error) {
    next(error);
  }
}

export async function confirmEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { token } = req.query;

    if (!token) return res.status(400).json({ message: "Token is required" });

    const tokenRecord = await prisma.token.findUnique({
      where: { token: token.toString() },
    });

    // console.log(tokenRecord);

    if (
      !tokenRecord ||
      tokenRecord.used ||
      tokenRecord.expiresAt < new Date()
    ) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    //Mark the token as used
    await prisma.token.update({
      where: { id: tokenRecord.id },
      data: { used: true },
    });

    //Mark the email as confirmed
    await prisma.users.update({
      where: { id: tokenRecord.userId },
      data: { emailConfirmed: true },
    });

    await prisma.referralCode.update({
      where: { id: tokenRecord.id },
      data: {
        isActivated: true,
        expireDate: new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000), //3 months
      },
    });

    //create wallet
    const wallet = await prisma.wallet.create({
      data: {
        userId: tokenRecord.userId,
      },
    });

    res.status(200).json({ message: "Email successfully confirmed!" });
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Required field is missing" });
    }

    const user = await prisma.users.findUnique({
      where: {
        email,
        emailConfirmed: true,
      },
    });

    if (!user)
      res.status(404).json({ message: "Email not confirmed or not found " });

    const isValidPassword = await compare(password, user?.password!);

    if (!isValidPassword) res.status(401).json({ message: "Invalid password" });

    const jwtPayload = { userId: user?.id, email, roleId: user?.roleId };
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: rememberMe ? "3y" : "1h",
    });

    //console.log(token);
    // res.cookie("cookies_name", "cookies_value", {httpOnly: true /*kapan dia expired jg bisa masukin sini*/ });

    let isNewUser;
    if (user?.isNewUser) {
      isNewUser = true;
    } else {
      isNewUser = false;
    }

    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "none",
        secure: true, //Note ganti true lg nnt pas push
      }) //beware CORS policy, set samesite carefully
      .status(200)
      .json({
        message: "Successfully logged in!",
        isNewUser, //user?.isNewUser ? "NEW" : "OLD",
      });
  } catch (error) {
    next(error);
  }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    res.clearCookie("token");

    return res.status(200).json({ message: "Successfully logged out." });
  } catch (error) {
    next(error);
  }
}
