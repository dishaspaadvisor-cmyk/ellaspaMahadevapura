/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  compress: false,

  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;