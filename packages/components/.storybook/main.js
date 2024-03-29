const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [{ directory: '../src', titlePrefix: 'Components' }],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    options: {
      lazyCompilation: true,
      fsCache: true,
    },
  },
  staticDirs: ['../public', '../src/assets'],
  webpackFinal: async (config) => {
    config.plugins = [...config.plugins, new VanillaExtractPlugin(), new MiniCssExtractPlugin()];

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];

    config.optimization = {
      runtimeChunk: 'single',
    };

    return config;
  },
};
