/** @type {import('next').NextConfig} */
  const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/search/[name].txt',
          destination: '/search/[name]',
        },
      ]
    },
  }

module.exports = nextConfig
