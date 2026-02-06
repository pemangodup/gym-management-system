import { NextFunction, Request, Response } from "express";
import { registerUser } from "../services/auth.service.js";
import { trimStrings } from "../utils/trimStrings.js";

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
  const body = req.body;

  // Using the trimString() utility function to trim the strings
  const trimmedStrings = trimStrings(body);

  const { fullName, email, password, confirmPassword, role } = trimmedStrings;

  if (!fullName || !email || !password || !confirmPassword || !role) {
    return res.status(400).json({
      success: true,
      data: {
        error: "Missing required field",
      },
    });
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
