/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/fonts/:path*',
        destination: 'https://preheat-bbbd1.web.app/fonts/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
