import { prisma } from "../config/db.js";
import { hashPassword, verifyHashPassword } from "../utils/password.js";

import { ErrorResponse } from "../utils/ErrorResponse.js";

type RegisterBody = {
  fullName: string;
  email: string;
  password: string;
  role: "MEMBER" | "OWNER" | "ADMIN";
  confirmPassword: string;
};

// REGISTER USER
export async function registerUser(input: RegisterBody) {
  const email = input.email.toLowerCase();

  // Checking if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new ErrorResponse("Email already registered.", 400);
  }

  //Hashing the password
  const hashedPassword = await hashPassword(input.password);

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

// LOGIN USER
type LoginBody = {
  role: "ADMIN" | "MEMBER" | "OWNER";
  email: string;
  password: string;
};
export async function loginUser(user: LoginBody) {
  const email = user.email.toLowerCase();

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (!existingUser) {
    throw new ErrorResponse("User does not exist", 401);
  }
  const result = await verifyHashPassword(user.password, existingUser.password);
  if (!result) {
    throw new ErrorResponse("Password does not match.", 401);
  }

  console.log(result);
  return existingUser;
}
