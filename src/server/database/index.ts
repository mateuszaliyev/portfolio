import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { environment } from "@/environment";

import * as schema from "@/server/database/schema";

const client = postgres(environment.DATABASE_URL, { prepare: false });

export const database = drizzle(client, { schema });
