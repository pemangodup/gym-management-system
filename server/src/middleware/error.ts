import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Server Error";

  if (err instanceof ErrorResponse) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({
    success: false,
    message: message,
  });
};
