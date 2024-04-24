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
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          'sub': `sub@http://localhost:3001/_next/static/${
            isServer ? 'ssr' : 'chunks'
          }/remoteEntry.js`,
        },
        exposes: {
          // './store': './zustand/store.js',
        },
        shared: {
       
        },
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
