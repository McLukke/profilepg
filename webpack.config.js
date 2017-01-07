const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'babel-regenerator-runtime',
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  postcss: [
    autoprefixer({
      browsers: [
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 10',
        'Edge >= 1',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6',
      ],
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel'],
      },
      {
        test: /\.scss$/,
        loader: 'style!css?modules&localIdentName=[path]---[local]!postcss!resolve-url!sass?sourceMap',
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
