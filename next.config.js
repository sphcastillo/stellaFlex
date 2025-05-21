/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Fixes Turbopack warning
  turbopack: {
    // no nested "enabled" key anymore
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

module.exports = nextConfig;
