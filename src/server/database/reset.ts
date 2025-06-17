import { reset as resetDatabase } from "drizzle-seed";

import { database } from "@/server/database";
import * as schema from "@/server/database/schema";

export const reset = () => resetDatabase(database, schema);
