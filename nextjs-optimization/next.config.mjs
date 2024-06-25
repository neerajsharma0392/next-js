/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
    deviceSizes: [320, 420, 768, 1200],
  },
};

export default nextConfig;
