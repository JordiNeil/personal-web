/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/personal-web',
  assetPrefix: '/personal-web/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
