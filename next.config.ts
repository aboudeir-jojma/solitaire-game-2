/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // obligatoire pour Cloudflare Pages avec export statique
  },
};

export default nextConfig;
