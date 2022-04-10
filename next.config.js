/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // With Docker
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
