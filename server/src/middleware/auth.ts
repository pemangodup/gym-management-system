import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ErrorResponse } from "../utils/ErrorResponse.js";

type reqBody = {};
export const requireAuth = (
  req: Request<{}, {}, reqBody>,
  _res: Response,
  next: NextFunction,
) => {
  const header = req.header("Authorization");

  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token) {
    return next(new ErrorResponse("Unauthorized", 401));
  }

  try {
    const payload = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET as string,
    ) as any;

    // req.userId = payload.sub;
    // req.sessionId = payload.sid;
    console.log(payload);
    next();
  } catch {
    return next(new ErrorResponse("Invalid or expired token", 401));
  }
};
