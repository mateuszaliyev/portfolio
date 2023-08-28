import nextMdx from "@next/mdx";

import { environment } from "./src/environment.mjs";

const withMdx = nextMdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  /* eslint-disable-next-line @typescript-eslint/require-await */
  redirects: async () => [
    {
      destination: environment.NEXT_PUBLIC_GITHUB_URL,
      permanent: false,
      source: "/github",
    },
    {
      destination: environment.NEXT_PUBLIC_LINKEDIN_URL,
      permanent: false,
      source: "/linkedin",
    },
  ],
};

export default withMdx(nextConfig);
