import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Wajib untuk GitHub Pages
  basePath: '/WELLCOME-MY-PORTFOLIO', // WAJIB! Agar GitHub mengenali aset di dalam sub-folder ini
  images: {
    unoptimized: true,
  },
};

export default nextConfig;