import { Request } from "express";

// This file contains type for req.user

export interface VerifiedUser {
  email?: string;
  userId?: string;
  role?: string;
}

export interface RequestWithUserId extends Request {
  user?: VerifiedUser;
}
