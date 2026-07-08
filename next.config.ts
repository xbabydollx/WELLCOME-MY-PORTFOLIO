import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export', // Wajib untuk GitHub Pages
  // Hanya pakai basePath kalau sedang di-build untuk internet (production)
  basePath: isProd ? '/WELLCOME-MY-PORTFOLIO' : '', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;