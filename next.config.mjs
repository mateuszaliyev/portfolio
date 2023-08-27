import nextMdx from "@next/mdx";

import "./src/environment.mjs";

const withMdx = nextMdx();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

export default withMdx(nextConfig);
