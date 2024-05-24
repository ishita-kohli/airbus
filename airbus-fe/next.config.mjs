/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "airbus-wabl.onrender.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "5252",
      },
    ],
  },
};

export default nextConfig;
