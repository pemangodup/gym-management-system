import { NextFunction, Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service.js";
import { trimStrings } from "../utils/trimStrings.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

type RegisterBody = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "MEMBER" | "OWNER" | "ADMIN";
};

// @desc   Register User
// @route  POST /gym-management-app/auth/register
// @access Public

export const register = async (
  req: Request<{}, {}, RegisterBody>,
  res: Response,
  next: NextFunction,
) => {
  const data = req.body;

  // Using the trimString() utility function to trim the strings
  const trimmedStrings = trimStrings(data);

  const { fullName, email, password, confirmPassword, role } = trimmedStrings;

  if (!fullName || !email || !password || !confirmPassword || !role) {
    return next(new ErrorResponse("Please provide both the credentials.", 400));
  }
  try {
    // Passing the parameter in the registerUser()
    const user = await registerUser(trimmedStrings);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Login User
// @route  POST /gym-management-app/auth/login
// @access Private
type LoginBody = {
  role: "ADMIN" | "MEMBER" | "OWNER";
  email: string;
  password: string;
};
export const login = async (
  req: Request<{}, {}, LoginBody>,
  res: Response,
  next: NextFunction,
) => {
  const data = req.body;
  const trimedData = trimStrings(data);

  const { role, email, password } = req.body;
  if (!role || !email || !password) {
    return next(new ErrorResponse("Please provide both the credentials.", 400));
  }

  try {
    const user = await loginUser(trimedData);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
