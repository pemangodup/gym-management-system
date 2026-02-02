import { prisma } from "../config/db.js";
import { hashPassword } from "../utils/password.js";

import { ErrorResponse } from "../utils/errorResponse.js";

type RegisterBody = {
  fullName: string;
  email: string;
  password: string;
  role: "MEMBER" | "OWNER" | "ADMIN";
  confirmPassword: string;
};

// Registering User
export async function registerUser(input: RegisterBody) {
  const email = input.email.toLowerCase();

  //Hashing the password
  const hashedPassword = await hashPassword(input.password);
  try {
    // Checking if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new ErrorResponse("Email already registered", 400);
    } else {
      // Create User
      const user = await prisma.user.create({
        data: {
          fullName: input.fullName,
          email: email,
          password: hashedPassword,
        },
        select: {
          id: true,
          fullName: true,
          email: true,
          createdAt: true,
        },
      });
      return user;
    }
  } catch (error) {
    return {
      error,
    };
  }
}
