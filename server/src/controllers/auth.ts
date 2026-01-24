import { Request, Response } from "express";
import { prisma } from "../config/db.js";

// @desc   Register User
// @route  POST /gym-management-app/auth/register
// @access Public

type RegisterBody = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const register = (req: Request<{}, {}, RegisterBody>, res: Response) => {
  const body = req.body;
  console.log(body);
  res.status(201).json({
    success: true,
    data: body,
  });
};
