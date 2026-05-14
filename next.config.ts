import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

(nextConfig as any).turbopack = {
  root: './',
};

export default nextConfig;
