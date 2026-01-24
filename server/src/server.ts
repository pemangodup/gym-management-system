import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Initializing dotenv file
dotenv.config({ path: "./config/config.env" });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import authRouter from "./routes/auth.js";

app.use("/gym-management-app/v1/auth", authRouter);

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
