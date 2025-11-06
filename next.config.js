/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'openarmsglobal.org'],
    unoptimized: true,
  },
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig