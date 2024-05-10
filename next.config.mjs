/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.fucmusic.ru",
      },
    ],
  },
};

export default nextConfig;
