import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const environment = createEnv({
  client: {
    NEXT_PUBLIC_EMAIL_ADDRESS: z.string().email(),
    NEXT_PUBLIC_GITHUB_URL: z
      .string()
      .url()
      .startsWith("https://github.com/")
      .transform((url) => /** @type {`https://github.com/${string}`} */ (url)),
    NEXT_PUBLIC_LINKEDIN_URL: z
      .string()
      .url()
      .startsWith("https://linkedin.com/")
      .transform(
        (url) => /** @type {`https://linkedin.com/${string}`} */ (url),
      ),
  },
  runtimeEnv: {
    NEXT_PUBLIC_EMAIL_ADDRESS: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
});
