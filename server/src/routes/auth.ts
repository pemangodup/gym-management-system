import express from "express";
const authRouter = express.Router();

import { register } from "../controllers/auth.js";

authRouter.post("/register", register);

export default authRouter;
