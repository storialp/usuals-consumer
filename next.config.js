/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "personal-website-pics-2.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
}

module.exports = nextConfig
