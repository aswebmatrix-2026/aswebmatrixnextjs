// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add trailing slashes
  trailingSlash: true,
  
  // Configure static exports for specific routes
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      ...defaultPathMap,
      '/robots.txt': { page: '/robots.txt' },
      '/sitemap.xml': { page: '/sitemap.xml' },
    }
  },
  
  // If using images
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig