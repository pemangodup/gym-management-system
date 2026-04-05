import { Request, Response, NextFunction } from "express";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { fullName, email, role, password, confirmPassword } = req.body;
  if (!fullName || !email || !role || !password || !confirmPassword) {
    return next(new ErrorResponse("Missing field", 400));
  }

  if (password !== confirmPassword) {
    return next(
      new ErrorResponse("Password and confirm password does not match.", 400),
    );
  }

  if (password.length < 6) {
    return next(
      new ErrorResponse("Password must be at least 6 characters. ", 400),
    );
  }
  next();
};
