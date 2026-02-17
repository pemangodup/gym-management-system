import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { errorHandler } from "./middleware/error.js";

const app = express();

// Security Middleware for web app
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend's URL
  methods: ["GET", "PUT", "DELETE"], // Restrict allowed actions
  credentials: true, // Allow cookies/sessions if needed later
};
// For browser protection
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Routes
import authRouter from "./routes/auth.js";

// Routing with the routes path
app.use("/gym-management-app/v1/auth", authRouter);

// Custom Error Handler
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
