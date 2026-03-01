import express from "express";
const authRouter = express.Router();

import {
  register,
  login,
  refreshToken,
  changePassword,
} from "../controllers/auth.js";
import { requireAuth } from "../middleware/auth.js";

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/refresh", requireAuth, refreshToken);
authRouter.post("/change-password", changePassword);

export default authRouter;
