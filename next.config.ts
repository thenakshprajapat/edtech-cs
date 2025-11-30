import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/edtech-cs',
  assetPrefix: '/edtech-cs/',
};

export default nextConfig;
