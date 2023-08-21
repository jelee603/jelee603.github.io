/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'imgix',
    path: 'https://jelee603.github.io',
  },
};

module.exports = nextConfig;
