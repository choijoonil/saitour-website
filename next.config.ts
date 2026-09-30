import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/company",
        permanent: true
      },
      {
        source: "/reviews",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
