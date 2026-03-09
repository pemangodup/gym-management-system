import { Request, Response, NextFunction } from "express";

import { registerUser, loginUser } from "../services/auth.service.js";
import { trimStrings } from "../utils/trimStrings.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";
import {
  createRefreshToken,
  hashToken,
  signAccessToken,
} from "../utils/token.js";
import { prisma } from "../config/db.js";
import { hashPassword, verifyHashPassword } from "../utils/password.js";

// @desc   Register User
// @route  POST /gym-management-system/v1/auth/register
// @access Public

type RegisterBody = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "MEMBER" | "OWNER" | "ADMIN";
};

export const register = async (
  req: Request<{}, {}, RegisterBody>,
  res: Response,
  next: NextFunction,
) => {
  const data = req.body;

  // Using the trimString() utility function to trim the strings
  const trimmedStrings = trimStrings(data);

  const { fullName, email, password, confirmPassword, role } = trimmedStrings;

  if (!fullName || !email || !password || !confirmPassword || !role) {
    return next(new ErrorResponse("Please provide both the credentials.", 400));
  }
  try {
    // Passing the parameter in the registerUser()
    const user = await registerUser(trimmedStrings);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Login User
// @route  POST /gym-management-system/v1/auth/login
// @access Private
type LoginBody = {
  role: "ADMIN" | "MEMBER" | "OWNER";
  email: string;
  password: string;
};

// OPTIONAL: decide client type (web/mobile)
function getClientType(req: Request) {
  const t = (req.header("x-client-type") || "").toLowerCase();
  return t == "mobile" ? "mobile" : "web";
}
export const login = async (
  req: Request<{}, {}, LoginBody>,
  res: Response,
  next: NextFunction,
) => {
  const data = req.body;
  const trimedData = trimStrings(data);

  const { role, email, password } = trimedData;
  if (!role || !email || !password) {
    return next(new ErrorResponse("Please provide both the credentials.", 400));
  }

  try {
    const user = await loginUser(trimedData);

    // Create refresh token + store hash in DB
    const refreshToken = createRefreshToken();

    const refreshTokenHash = hashToken(refreshToken);

    const session = await prisma.session.create({
      data: {
        userId: user.id,
        refreshTokenHash,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      },
    });

    // Create Access Token
    const accessToken = signAccessToken({
      userId: user.id,
      sessionId: session.id,
    });

    // Send refresh token (web cookie/ mobile JSON)
    const clientType = getClientType(req);

    if (clientType === "web") {
      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // true in production HTTPS
        sameSite: "lax",
        path: "/auth/refresh",
      });
      return res.status(200).json({
        success: true,
        data: {
          user,
          accessToken,
        },
      });
    }

    // mobile
    return res.status(200).json({
      success: true,
      data: {
        user,
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Refresh Token
// @route  POST /gym-management-system/v1/auth/refresh
// @access Private

type RefreshBody = { refreshToken?: string };

export const refreshToken = async (
  req: Request<{}, {}, RefreshBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tokenFromCookie = req.cookies?.refresh_token;
    const tokenFromBody = req.body?.refreshToken;

    const refreshToken = tokenFromCookie || tokenFromBody;
    if (!refreshToken) {
      return next(new ErrorResponse("Missing refresh token.", 401));
    }
    const session = await prisma.session.findFirst({
      where: {
        refreshTokenHash: hashToken(refreshToken),
        revokedAt: null,
      },
    });

    if (!session || session.expiresAt < new Date()) {
      return next(new ErrorResponse("Invalid refresh token.", 401));
    }

    // Rotate
    const newRefresh = createRefreshToken();
    await prisma.session.update({
      where: { id: session.id },
      data: {
        refreshTokenHash: hashToken(newRefresh),
        lastUsedAt: new Date(),
      },
    });

    const accessToken = signAccessToken({
      userId: session.userId,
      sessionId: session.id,
    });

    // Web
    if (tokenFromCookie) {
      res.cookie("refresh_token", newRefresh, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "auth/refresh",
      });

      return res.json({
        success: true,
        data: {
          accessToken,
        },
      });
    }

    // Mobile
    return res.json({
      success: true,
      data: {
        accessToken,
        refreshToken: newRefresh,
      },
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Change Password
// @route   POST /gym-management-system/v1/auth/change-password
// @access  Private
export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { email, oldPassword, newPassword, userId } = req.body;

  let user = await prisma.user.findUnique({
    where: { id: userId, email },
  });

  const isMatch = await verifyHashPassword(oldPassword, user?.password as any);

  if (!isMatch) {
    return next(new ErrorResponse("Password does not match.", 401));
  }

  const hashedNewPassword = await hashPassword(newPassword);

  // Verifying that new password is not equal to old one
  const validatePasswordUniqueness = await verifyHashPassword(
    newPassword,
    user?.password as any,
  );
  if (validatePasswordUniqueness) {
    return next(
      new ErrorResponse("New password cannot be the same as old one. ", 400),
    );
  }

  user = await prisma.user.update({
    where: { id: user?.id },
    data: { password: hashedNewPassword },
  });

  return res.status(200).json({
    success: true,
    data: user,
  });
};

// @desc   Forgot Password
// @route  POST /gym-management-system/v1/auth/change-password
// @access Private

export const forgotPassword = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(200).json({
    success: true,
    data: { email: req.body.email },
  });
};
