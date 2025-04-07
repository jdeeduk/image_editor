/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Changed from 'standalone' to 'export' for static site generation
  images: {
    unoptimized: true,
    domains: ['image-editor.pages.dev'],
  },
  // Disable server-side features not supported in static exports
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig