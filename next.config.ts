import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.pennylaneaccountants.co.uk',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'operto.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.cookielaw.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.acumatica.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tipalti.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mma.prnewswire.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '1000logos.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.m3as.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.rooferscoffeeshop.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.3ds.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.adp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prod.gusto-assets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.stickpng.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
