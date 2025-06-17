import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

const string = z.string().trim().min(1);

export const environment = createEnv({
  emptyStringAsUndefined: true,
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    ID_LENGTH: process.env.ID_LENGTH,
    PERSON_SLUG: process.env.PERSON_SLUG,
    REVALIDATE_SECRET: process.env.REVALIDATE_SECRET,
    SOFTWARE_SLUG: process.env.SOFTWARE_SLUG,
  },
  server: {
    DATABASE_URL: string,
    ID_LENGTH: z.coerce.number().int().max(31).min(7),
    PERSON_SLUG: string,
    REVALIDATE_SECRET: string,
    SOFTWARE_SLUG: string,
  },
});
