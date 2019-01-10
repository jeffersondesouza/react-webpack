const path = require('path');

const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const FontelloPlugin = require("fontello-webpack-plugin")


const plugins = [];

plugins.push(new cleanWebpackPlugin(['dist']));

plugins.push(
  new FontelloPlugin({
    config: require("./fontello.config.json"),
    fonts:[ "eot", "woff", "woff2", "ttf", "svg" ],
    name:"icons",
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
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
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
    contentBase: './dist',
    hot: true
  }
};