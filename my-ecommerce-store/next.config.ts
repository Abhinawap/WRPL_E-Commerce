import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  devIndicators: false,
  eslint: {
    // Temporarily disable ESLint during builds (especially for Vercel deployment)
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "", // Keep empty unless necessary
        pathname: "/**", // Allows all paths
        search: "", // Keep empty unless you need specific query params
      },
    ],
  },
};

export default nextConfig;
