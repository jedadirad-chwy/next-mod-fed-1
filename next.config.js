/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: "next1",
        remotes: {
          next2:
            "next2@http://localhost:3000/_next/static/chunks/remoteEntry.js",
        },
        filename: "static/chunks/remoteEntry.js",
      })
    );
    return config;
  },
};
module.exports = nextConfig;
