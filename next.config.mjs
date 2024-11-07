import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mui/material", "@emotion/react", "@emotion/styled"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, { "mapbox-gl": "mapboxgl" }];
    return config;
  },
};

export default withNextIntl(nextConfig);
