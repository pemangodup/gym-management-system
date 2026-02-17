import jwt from "jsonwebtoken";
import crypto from "crypto";

export function signAccessToken(payload: {
  userId: string;
  sessionId: string;
}) {
  return jwt.sign(
    { sid: payload.sessionId },
    process.env.ACCESS_TOKEN_SECRET as string,
    {
      subject: payload.userId,
      expiresIn: "10m",
    },
  );
}

export function createRefreshToken() {
  return crypto.randomBytes(64).toString("hex");
}

export function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}
