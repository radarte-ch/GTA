/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
    disableStaticImages: true,
    domains: ['localhost'],
    unoptimized: true,
  }
}

module.exports = nextConfig;

