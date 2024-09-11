import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Authentication
export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    console.log(1);
    // const token = req.header("Authorization")?.replace("Bearer ", "");
    const token = req.cookies.token; //from login function in auth contorller
    console.log(req.cookies);
    if (!token) return res.status(401).json({ message: "No token provided" });

    const verifiedUser = jwt.verify(
      token!,
      process.env.JWT_SECRET_KEY as string
    );

    if (!verifiedUser)
      return res.status(401).json({ message: "Invalid token" });

    (req as any).user = verifiedUser;

    next();
  } catch (error) {
    next(error);
  }
}

export async function adminGuard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if ((req as any).user.roleId !== 1) {
      res
        .status(401)
        .json({ message: "Unauthorized access, you're not an admin" });
    }
    next();
  } catch (error) {
    console.error(error);
  }
}
