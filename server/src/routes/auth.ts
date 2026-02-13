import express from "express";
const authRouter = express.Router();

import { register, loginUser } from "../controllers/auth.js";

authRouter.post("/register", register);
authRouter.post("/login", loginUser);

export default authRouter;
