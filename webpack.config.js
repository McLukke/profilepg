const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const parseArgs = require('minimist');

const ARGV = parseArgs(process.argv.slice(2), {
  alias: {
    DEV: 'dev',
    VERBOSE: 'verbose',
  },
  default: {
    DEV: false,
    VERBOSE: false,
  },
});

module.exports = {
  devtool: ARGV.DEV ? 'cheap-module-eval-source-map' : false,
  entry: (
    ARGV.DEV ?
    [
      'webpack-hot-middleware/client',
      'babel-regenerator-runtime',
      'react-hot-loader/patch',
    ] : []
  ).concat('./src/index'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kenny Lu',
      template: path.join(__dirname, 'template', 'index.html'),
      favicon: path.join(__dirname, 'template', 'coding.png'),
      inject: false,
    }),
  ].concat(
    ARGV.DEV ?
    [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ]
    : [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new ExtractTextPlugin('main-[contenthash].css'),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: ARGV.VERBOSE,
        },
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
    ]
  ),
  cache: ARGV.DEV,
  debug: ARGV.DEV,
  stats: {
    colors: true,
    reasons: true,
    hash: ARGV.VERBOSE,
    version: ARGV.VERBOSE,
    timings: true,
    chunks: ARGV.VERBOSE,
    chunkModules: ARGV.VERBOSE,
    cached: ARGV.VERBOSE,
    cachedAssets: ARGV.VERBOSE,
  },
  babel: {
    cacheDirectory: ARGV.DEV,
  },
  sassLoader: {
    precision: 8,
  },
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
  imagemin: {
    minimize: !ARGV.DEV,
    gifsicle: {
      interlaced: true,
    },
    jpegtran: {
      progressive: true,
    },
    optipng: {
      optimizationLevel: 7,
    },
    svgo: {
      plugins: [
        {
          removeTitle: true,
        },
        {
          convertPathData: false,
        },
        {
          removeViewBox: false,
        },
      ],
    },
  },
  url: {
    dataUrlLimit: 8192,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel'],
      },
      {
        test: /(src[\\\/]common[\\\/]global-styles[\\\/].*\.css|node_modules[\\\/].*\.css)$/,
        loader:
          ARGV.DEV
          ? 'style-loader!css-loader!postcss!resolve-url'
          : ExtractTextPlugin.extract('style', 'css!postcss!resolve-url'),
      },
      {
        test: /(src[\\\/]common[\\\/]global-styles[\\\/].*\.scss|node_modules[\\\/].*\.scss)$/,
        loader:
          ARGV.DEV
          ? 'style-loader!css-loader!postcss!resolve-url!sass?sourceMap'
          : ExtractTextPlugin.extract('style', 'css!postcss!resolve-url!sass?sourceMap'),
      },
      {
        test: /\.scss$/,
        exclude: /(src[\\\/]common[\\\/]global-styles[\\\/].*\.scss|node_modules[\\\/].*\.scss)$/,
        loader:
          ARGV.DEV
          ? 'style-loader!css-loader?modules&localIdentName=[path]---[local]!postcss!resolve-url!sass?sourceMap'
          : ExtractTextPlugin.extract('style', 'css?modules!postcss!resolve-url!sass?sourceMap'),
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.(gif|jpe?g|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url!img',
      },
      {
        test: /\.(woff2?|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url',
      },
    ]
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx'],
    alias: {
      common: 'src/common',
      constants: 'src/constants',
      utils: 'src/utils',
      variables: 'src/common/global-styles/variables.scss',
    },
  },
};
