import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Wajib untuk GitHub Pages agar jadi HTML statis
  images: {
    unoptimized: true, // Matikan optimasi gambar bawaan server Next.js
  },
};

export default nextConfig;