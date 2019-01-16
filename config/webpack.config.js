const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FontelloPlugin = require("fontello-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


const plugins = [];
// const API_BASE_URL = JSON.stringify('http://localhost:8080');

const API_BASE_URL = JSON.stringify('https://api.punkapi.com/v2/beers');



plugins.push(new cleanWebpackPlugin(['dist']));

plugins.push(new webpack.DefinePlugin({ API_BASE_URL }));


plugins.push(
  new FontelloPlugin({
    config: require("./fontello.config.json"),
    fonts: ["eot", "woff", "woff2", "ttf", "svg"],
    name: "icons",
    output: {
      css: "[name].css",
      font: "font/[name].[ext]"
    },

  })
)

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
plugins.push(new webpack.HotModuleReplacementPlugin())

plugins.push(new OptimizeCssAssetsWebpackPlugin({
  cssProcessor: require('cssnano'),
  cssProcessorOptions: {
    discardComments: {
      removeAll: true
    }
  },
  canPrint: true
}));

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'public/bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/
        , loader: 'url?limit=100000&name=[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins,
  devServer: {
    historyApiFallback: true,
  }
};