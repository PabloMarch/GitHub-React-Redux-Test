const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageJson = require('./package.json');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

// for .babelrc config
process.env.BABEL_ENV = TARGET;

const common  = {
  entry: {
    app: [path.join(PATHS.app, 'index.js')],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: PATHS.build,
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory',
        include: PATHS.app
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(mp4|ogg)$/,
        loader: 'file-loader'
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  resolve: {
    modulesDirectories: ['components', 'node_modules', './']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: packageJson.description,
      template: path.join(PATHS.app, 'index.ejs')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
  ]
}

var config;

switch (TARGET) {
  case 'build':
    config = merge(common, {
      module: {
        loaders: [
          {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css-loader'),
            include: PATHS.app
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        }),
        new ExtractTextPlugin('app.css'),
      ]
    });
    break;

  default:
    config = merge(common, {
      devtool: 'eval-source-map',
      module: {
        loaders: [
          {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            include: PATHS.app
          }
        ]
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.HotModuleReplacementPlugin()
      ],
      devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: 'errors-only'
      }
    });
}

module.exports = validate(config);
