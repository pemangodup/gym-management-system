import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DATABASE_URL as string;

if (!connectionString) {
  console.log("No Database URl");
}
// 1. Initialize the Pool with the connection string
const pool = new pg.Pool({ connectionString });

// 2. Initializing the Adapter with the Pool instance
const adapter = new PrismaPg(pool);

// 3. Create the Prisma Client using the adapter
export const prisma = new PrismaClient({ adapter });
