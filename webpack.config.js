const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
require('dotenv').config();

module.exports = {

  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],

  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  node: {
    fs: 'empty',
    // net: 'empty'
  },
  // target: 'web',

  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'source-map',

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: path.resolve(__dirname, 'src/public'),
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://[::1]:8081',
    },
    historyApiFallback: true,
  },

  module: {
    rules: [
      // https://webpack.js.org/loaders/babel-loader/
      {
        test: /\.jsx?$/,
        resolve: { extensions: ['.js', '.jsx'] },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // https://webpack.js.org/loaders/sass-loader/
      {
        test: /\.(c|sa|sc)ss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },

  plugins: [
    new CompressionPlugin({ algorithm: 'gzip' }),
    new webpack.DefinePlugin({
      'process.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY),
    }),
  ],
};
