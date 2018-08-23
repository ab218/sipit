const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');



module.exports = {
  
  mode: 'development',
  entry: ["babel-polyfill", './src/index.js'],

  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
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
      '/api': 'http://localhost:8081'
    },
    historyApiFallback: true
  
  },

  module: {
    rules: [

      // https://webpack.js.org/loaders/babel-loader/
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },

      // https://webpack.js.org/loaders/sass-loader/
      {
        test: /\.(c|sa|sc)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
        ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      // $: 'jquery',
      _: 'lodash',
    }),
    new Dotenv(),
  ],
  
};
