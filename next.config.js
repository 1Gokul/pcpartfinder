module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/search",
        permanent: true
      }
    ];
  }
};
