import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio';

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  // reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
