/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
  // distDir: "build",
  images: {
    domains: ["basic-blog.teamrabbil.com", "roar.media", "images.pexels.com"],
  },
};

module.exports = nextConfig;
