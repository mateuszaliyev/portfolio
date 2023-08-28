import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const environment = createEnv({
  client: {
    NEXT_PUBLIC_BASE_URL: z
      .string()
      .url()
      .default(
        process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : `http://localhost:${process.env.PORT ?? 3000}`,
      ),
    NEXT_PUBLIC_EMAIL_ADDRESS: z.string().email(),
    NEXT_PUBLIC_GITHUB_URL: z
      .string()
      .url()
      .startsWith("https://github.com/")
      .transform((url) => /** @type {`https://github.com/${string}`} */ (url)),
    NEXT_PUBLIC_LINKEDIN_URL: z
      .string()
      .url()
      .startsWith("https://linkedin.com/in/")
      .transform(
        (url) => /** @type {`https://linkedin.com/in/${string}`} */ (url),
      ),
  },
  runtimeEnv: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    NEXT_PUBLIC_EMAIL_ADDRESS: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    NEXT_PUBLIC_GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
    NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  },
});
