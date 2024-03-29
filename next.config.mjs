/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
        port: '',
        pathname: '/192/192/people',
      },
      {
        protocol: 'https',
        hostname: 'notjustdev-dummy.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/avatars/**',
      },
    ],
  },
}

export default nextConfig
