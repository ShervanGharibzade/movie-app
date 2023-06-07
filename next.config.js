/** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
    async rewrites() {
      return [
        { source: "/", destination: "/search/:name" },
      ];
    }
  };
  

module.exports = nextConfig
