const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/search",
        permanent: true
      }
    ];
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
});
