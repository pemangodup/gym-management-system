import bcrypt from "bcrypt";

// Hashing the password
export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

// Verifying the hashed password
export async function verifyHashPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
