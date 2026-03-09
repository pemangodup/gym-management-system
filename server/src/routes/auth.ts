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

authRouter.post("/register", validateEmailString, register);
authRouter.post("/login", validateEmailString, login);
authRouter.post("/refresh", requireAuth, refreshToken);
authRouter.post("/change-password", requireAuth, changePassword);
authRouter.post("/forgot-password", forgotPassword);

export default authRouter;
