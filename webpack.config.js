const path = require('path');

const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin')


const plugins = [];

plugins.push(new cleanWebpackPlugin(['dist']));

plugins.push(new HtmlWebpackPlugin({
  hash: true,
  minify: {
    html5: true,
    collapseInlineTagWhitespace: true,
    removeComments: true,
  },
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
}));

plugins.push(
  new ExtractTextPlugin("styles.css")
);

/* plugins.push(new OptimizeCssAssetsWebpackPlugin({
  cssProcessor: require('cssnano'),
  cssProcessorOptions: {
    discardComments: {
      removeAll: true
    }
  },
  canPrint: true
})); */

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'public/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins
};