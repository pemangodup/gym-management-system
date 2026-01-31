import { prisma } from "../config/db.js";

type RegisterInput = {
  fullName: string;
  email: string;
  password: string;
};

// Registering User
export async function registerUser(input: RegisterInput) {
  const email = input.email.trim().toLowerCase();
  try {
    // Checking if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return {
        ok: false as const,
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
      ok: true as const,
      user,
    };
  } catch (error) {
    return {
      ok: false as const,
      error,
    };
  }
}
