import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../utils/ErrorResponse.js";
import { trimStrings } from "../utils/trimStrings.js";

export const validateEmailString = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email } = req.body;
  console.log("hehe");
  if (!email) {
    return next(new ErrorResponse("Provide a email address.", 400));
  }
  const sanitizedEmail = email.trim().toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(sanitizedEmail)) {
    return next(
      new ErrorResponse("Please provide a valid email address.", 400),
    );
  }
  console.log(sanitizedEmail);
  req.body.email = sanitizedEmail;
  next();
};
