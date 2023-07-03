const withMdx = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    typedRoutes: true,
  },
};

module.exports = withMdx(nextConfig);
