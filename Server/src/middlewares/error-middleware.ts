import { Request, Response, NextFunction } from "express";

interface ErrorWithStatusCode extends Error {
  statusCode?: number;
}

export function error(
  error: ErrorWithStatusCode,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const defaultError = {
    statusCode: error.statusCode || 500,
    message: error.message || "Sorry, something went wrong >_<",
  };

  //console.error(error.message);

  return res
    .status(defaultError.statusCode)
    .json({ message: defaultError.message });
}
