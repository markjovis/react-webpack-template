/* eslint-disable no-param-reassign */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const createEnvironmentHash = require('./webpack_utils/createEnvironmentHash');
const terminal = require('./webpack_utils/terminal');

module.exports = (mode) => {
  process.env.NODE_ENV = mode.ENV;
  const isProd = process.env.NODE_ENV === 'production';
  const appDirectory = fs.realpathSync(process.cwd());
  const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

  if (!mode.type) mode.type = 'http';
  if (!mode.port) mode.port = 8080;

  terminal(mode);

  return {
    entry: '/src/index.js',
    output: {
      pathinfo: !isProd, // In production should be false.
      publicPath: '/',
      path: path.join(__dirname, '/dist'), // the bundle output path.
      // The name of the bundle.
      filename: isProd
        ? 'static/js/[name].[contenthash:8].js'
        : 'static/js/[name].js',
      chunkFilename: isProd
        ? 'static/js/[name].chunk.[contenthash:8].js'
        : 'static/js/[name].chunk.js',
      assetModuleFilename: 'static/media/[name].[hash][ext]',
      clean: true,
    },
    cache: !isProd, // In production should be false.
    // If cache setting is needed.
    // cache: {
    //   type: 'filesystem',
    //   version: createEnvironmentHash(mode.env),
    //   cacheDirectory: resolveApp('node_modules/.cache'),
    //   store: 'pack',
    // },
    infrastructureLogging: {
      colors: !isProd,
      level: isProd ? 'none' : 'warn',
    },
    optimization: {
      minimize: isProd,
      runtimeChunk: 'multiple',
      splitChunks: {
        chunks: 'all',
        minSize: 250000,
        maxSize: 600000,
        hidePathInfo: true,
      },
      removeAvailableModules: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      // alias: {
      //   src: path.resolve(__dirname, 'src/')
      // },
      // alias: {
      //   Assets: path.resolve(__dirname, 'src/assets/')
      // },
      fallback: {
        fs: false,
      },
    },
    target: 'web',
    mode: process.env.NODE_ENV,
    devtool: isProd
      ? false // 'source-map'
      : 'cheap-module-source-map',
    devServer: {
      compress: true,
      hot: true,
      port: mode.port,
      server: mode.type,
      historyApiFallback: true,
      client: {
        logging: 'info',
      },
    },
    performance: {
      maxEntrypointSize: 1000000,
      maxAssetSize: 1000000,
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.(js|ts)$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules/, // excluding the node_modules folder
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: isProd,
            compact: true,
            sourceMaps: !isProd, // in prod, set to false
            inputSourceMap: !isProd, // in prod, set to false
          },
        },
        {
          test: /\.(scss|sa|sc|c)ss$/, // styles files
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif|jpe?g|svg)$/, // import images.
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/, // import fonts.
          type: 'asset/resource',
        },
        {
          test: /\.(config)$/,
          loader: 'file-loader',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: path.join(__dirname, 'public', 'index.html'), // to import index.html file inside index.js
        // In production Minify.
        ...(isProd
          ? {
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
          }
          : undefined),
      }),
      new Dotenv({
        path: `./.env.${mode.env}`,
      }),
      new Dotenv({
        path: './.env',
      }),
      new ESLintPlugin({
        emitWarning: false,
      }),
      new NodePolyfillPlugin(),
      // Needed for Moment.js.
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public/web.config' },
          { from: 'public/favicon.ico' },
        ],
      }),
    ]
  };
};