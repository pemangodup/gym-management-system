import { Request, Response } from "express";
import { registerUser } from "../services/auth.service.js";
import { trimStrings } from "../utils/trimStrings.js";
// @desc   Register User
// @route  POST /gym-management-app/auth/register
// @access Public

type RegisterBody = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "MEMBER" | "OWNER" | "ADMIN";
};

export const register = async (
  req: Request<{}, {}, RegisterBody>,
  res: Response,
) => {
  const body = req.body;

  const trimmedStrings = trimStrings(body);

  const { fullName, email, password, confirmPassword, role } = body;

  if (!fullName || !email || !password || !confirmPassword || !role) {
    return res.status(400).json({
      success: false,
      error: "Missing required field",
    });
  }
  const user = await registerUser(trimmedStrings);
  res.status(201).json({
    success: true,
    data: user,
  });
};
