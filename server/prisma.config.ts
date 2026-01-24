import dotenv from "dotenv";
import path from "path";
import { defineConfig, env } from "prisma/config";

dotenv.config({
  path: path.resolve(process.cwd(), "src/config/config.env"),
});

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
 