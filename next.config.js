module.exports = {
  reactStrictMode: true,
};
// next.config.js  (only the webpack() part shown)
const svgRegex = /\.svg$/i;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // 1️⃣  Find *the* default asset rule that handles SVGs *and* is a RegExp
    const assetRule = config.module.rules.find(
      (rule) => rule.test instanceof RegExp && rule.test.test('file.svg')
    );

    if (assetRule) {
      // Tell that rule to ignore .svg so SVGR can own them
      assetRule.exclude = svgRegex;
    }

    // 2️⃣  Add SVGR for any SVG that’s imported from JS/TS/TSX/JSX
    config.module.rules.push({
      test: svgRegex,
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
