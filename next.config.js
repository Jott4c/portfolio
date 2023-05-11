/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "ibb.co",
      "www.google.com.br",
      "www.google.com",
      "i.ibb.co",
      "via.placeholder.com",
    ],
  },
};

module.exports = nextConfig;
