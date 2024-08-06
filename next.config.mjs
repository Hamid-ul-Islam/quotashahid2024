/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shohid.info',
        port: '',
        pathname: '/shohid/**',
      },
    ],
  },
};

export default nextConfig;
