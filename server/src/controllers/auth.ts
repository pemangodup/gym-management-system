import { Request, Response } from "express";
import { registerUser } from "../services/auth.service.js";

// @desc   Register User
// @route  POST /gym-management-app/auth/register
// @access Public

type RegisterBody = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const register = async (
  req: Request<{}, {}, RegisterBody>,
  res: Response,
) => {
  const body = req.body;

  const user = await registerUser(body);
  res.status(201).json({
    success: true,
    data: user,
  });
};
