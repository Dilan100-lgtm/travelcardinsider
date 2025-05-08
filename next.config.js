module.exports = {
  reactStrictMode: true,
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing asset rule for svgs and exclude the paths you
    // want SVGR to handle, or just delete the default test for /\.svg$/
    const fileLoaderRule = config.module.rules.find(
      rule => rule.test && rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;

    // Add SVGR
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            titleProp: true,
            svgo: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
