import express from "express";
const authRouter = express.Router();

import { register, login, refreshToken } from "../controllers/auth.js";
import { requireAuth } from "../middleware/auth.js";

authRouter.post("/register", register);
authRouter.post("/login", requireAuth, login);
authRouter.post("/refresh", refreshToken);

export default authRouter;
