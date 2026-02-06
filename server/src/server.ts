import express from "express";
import cors from "cors";

import { errorHandler } from "./middleware/error.js";

const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// Routes
import authRouter from "./routes/auth.js";

// Routing with the routes path
app.use("/gym-management-app/v1/auth", authRouter);

// Custom Error Handler
app.use(errorHandler);

const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
