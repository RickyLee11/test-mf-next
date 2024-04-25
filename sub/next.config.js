const NextFederationPlugin = require('@module-federation/nextjs-mf');
const deps = require("./package.json").dependencies;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  webpack(config, options) {
    const { isServer } = options;

    config.plugins.push(
      new NextFederationPlugin({
        name: 'sub',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          'host': `host@http://localhost:3000/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        exposes: {
          './button': './components/button.js',
        },
        shared: {
          // ...deps,
          // react: {
          //   singleton: true,
          //   requiredVersion: deps.react,
          // },
          // 'react-dom': {
          //   singleton: true,
          //   requiredVersion: deps['react-dom']
          // },
        },
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
