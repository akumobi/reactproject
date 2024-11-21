/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'packhub.ng',
        port: '',
        pathname: '/**',
      },
    ],
  },
}


// export default nextConfig;
