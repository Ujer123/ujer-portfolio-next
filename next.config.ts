import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable gzip compression for responses
  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Long-term caching for static assets in /public
  async headers() {
    return [
      {
        source: "/:all*(svg|png|jpg|jpeg|webp|avif|js|css|woff|woff2|pdf|mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  experimental: {
    // Reduce bundle size by optimizing ESM package imports
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "framer-motion",
      "clsx",
    ],
  },
};

export default nextConfig;
