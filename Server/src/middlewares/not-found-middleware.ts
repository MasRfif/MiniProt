import { Request, Response, NextFunction } from "express";

//middleware harus selalu ada Next

export function notFound(req: Request, res: Response, next: NextFunction) {
  return res.status(404).json({ message: "Sorry, page does not exist" });
}
