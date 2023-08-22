/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
  distDir: "build",
  images: {
    domains: ["basic-blog.teamrabbil.com", "roar.media"],
  },
};

module.exports = nextConfig;
