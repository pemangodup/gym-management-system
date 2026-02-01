import { prisma } from "../config/db.js";

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
  try {
    // Checking if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        success: false as const,
        error: "Email already registered.",
      };
    }

    // Create User
    const user = await prisma.user.create({
      data: {
        fullName: input.fullName,
        email: email,
        password: input.password,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        createdAt: true,
      },
    });
    return {
      success: true as const,
      user,
    };
  } catch (error) {
    return {
      success: false as const,
      error,
    };
  }
}
