import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/2025", destination: "/2026", permanent: true }];
  },
};

export default nextConfig;
