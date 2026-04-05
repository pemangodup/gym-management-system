import express from "express";
const authRouter = express.Router();

import {
  register,
  login,
  refreshToken,
  changePassword,
  forgotPassword,
} from "../controllers/auth.js";
import { requireAuth } from "../middleware/auth.js";
import { validateEmailString } from "../middleware/validateEmailString.js";
import { validateRegister } from "../middleware/validateRegister.js";

authRouter.post("/register", validateRegister, validateEmailString, register);
authRouter.post("/login", validateEmailString, login);
authRouter.post("/refresh", requireAuth, refreshToken);
authRouter.post(
  "/change-password",
  validateEmailString,
  requireAuth,
  changePassword,
);
authRouter.post("/forgot-password", validateEmailString, forgotPassword);

export default authRouter;
