const webpack = require('webpack');
const path = require('path');

const env = process.env.NODE_ENV;
/*
 * so process.cwd() is used instead to determine the correct base directory
 * Read more: https://nodejs.org/api/process.html#process_process_cwd
 */
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  context: path.resolve(CURRENT_WORKING_DIR, 'client'),
  entry: {
    app: ['./main.jsx'],
  },
  mode: 'production',
  output: {
    path: path.resolve(CURRENT_WORKING_DIR, 'dist'), //  destination
    filename: 'client.bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, // check for all js or jsx files
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-proposal-function-bind',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    ],
  },
  devtool: 'hidden-source-map',
};

module.exports = config;
