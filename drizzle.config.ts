import "@/environment/load";

import { defineConfig } from "drizzle-kit";

import { environment } from "@/environment";

export default defineConfig({
  dbCredentials: {
    url: environment.DATABASE_URL,
  },
  dialect: "postgresql",
  schema: "./src/server/database/schema.ts",
});
