const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function createWebpackConfig(env = { verbose: false, dev: false }) {
  // env variables
  const verbose = env.verbose || false;
  const dev = env.dev || false;

  // plugin options
  const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ];
  const releasePlugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin({
      filename: 'main-[contenthash].css',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: verbose,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
  ];
  const plugins = [
    new HtmlWebpackPlugin({
      title: 'Kenny Lu',
      template: path.join(__dirname, 'template', 'index.html'),
      favicon: path.join(__dirname, 'src', 'images', 'love_coding.jpeg'),
      inject: false,
    }),
  ].concat(dev ? devPlugins : releasePlugins);

  // loader options
  const imgLoaderOptions = {
    minimize: !dev,
    gifsicle: {
      interlaced: true,
    },
    mozjpeg: {
      progressive: true,
      arithmetic: true,
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
  };

  const urlLoaderOptions = {
    dataUrlLimit: 10000,
  };

  const cssLoaderOptions = {
    minimize: !dev,
  };

  const sassLoaderOptions = {
    precision: 8,
    sourceMap: true,
  };

  const postcssLoaderOptions = {
    plugins: [
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
  };

  const babelLoaderOptions = {
    cacheDirectory: dev,
  };

  return {
    entry: (dev ?
      [
        'webpack-hot-middleware/client?http://localhost:3000',
        'babel-regenerator-runtime',
        'react-hot-loader/patch',
      ]
    : []
    ).concat('./src/index'),

    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },

    plugins,

    cache: dev,

    devtool: dev ? 'cheap-module-eval-source-map' : false,

    stats: {
      colors: true,
      reasons: true,
      hash: verbose,
      version: verbose,
      timings: true,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose,
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: babelLoaderOptions,
            },
            {
              loader: "react-hot-loader/webpack",
            }
          ]
        },
        {
          test: /(src[\\/]common[\\/]global-styles[\\/].*\.css|node_modules[\\/].*\.css)$/,
          use: dev ?
            [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: cssLoaderOptions,
              },
              {
                loader: 'postcss-loader',
                options: postcssLoaderOptions,
              },
              {
                loader: 'resolve-url-loader',
              },
            ]
          :
            ExtractTextPlugin.extract({
              fallback: {
                loader: 'style-loader',
              },
              use: [
                {
                  loader: 'css-loader',
                  options: cssLoaderOptions,
                },
                {
                  loader: 'postcss-loader',
                  options: postcssLoaderOptions,
                },
                {
                  loader: 'resolve-url-loader',
                },
              ],
            }),
        },
        {
          test: /(src[\\/]common[\\/]global-styles[\\/].*\.scss|node_modules[\\/].*\.scss)$/,
          use: dev ?
            [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: cssLoaderOptions,
              },
              {
                loader: 'postcss-loader',
                options: postcssLoaderOptions,
              },
              {
                loader: 'resolve-url-loader',
              },
              {
                loader: 'sass-loader',
                options: sassLoaderOptions,
              },
            ]
          :
            ExtractTextPlugin.extract({
              fallback: {
                loader: 'style-loader',
              },
              use: [
                {
                  loader: 'css-loader',
                  options: cssLoaderOptions,
                },
                {
                  loader: 'postcss-loader',
                  options: postcssLoaderOptions,
                },
                {
                  loader: 'resolve-url-loader',
                },
                {
                  loader: 'sass-loader',
                  options: sassLoaderOptions,
                },
              ],
            }),
        },
        {
          test: /\.scss$/,
          exclude: /(src[\\/]common[\\/]global-styles[\\/].*\.scss|node_modules[\\/].*\.scss)$/,
          use: dev ?
            [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: Object.assign({ modules: true, localIdentName: '[path]---[local]' }, cssLoaderOptions),
              },
              {
                loader: 'postcss-loader',
                options: postcssLoaderOptions,
              },
              {
                loader: 'resolve-url-loader',
              },
              {
                loader: 'sass-loader',
                options: sassLoaderOptions,
              },
            ]
          :
            ExtractTextPlugin.extract({
              fallback: {
                loader: 'style-loader',
              },
              use: [
                {
                  loader: 'css-loader',
                  options: Object.assign({ modules: true }, cssLoaderOptions),
                },
                {
                  loader: 'postcss-loader',
                  options: postcssLoaderOptions,
                },
                {
                  loader: 'resolve-url-loader',
                },
                {
                  loader: 'sass-loader',
                  options: sassLoaderOptions,
                },
              ],
            }),
        },
        {
          test: /\.less$/,
          use: dev ?
            [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
                options: cssLoaderOptions,
              },
              {
                loader: 'postcss-loader',
                options: postcssLoaderOptions,
              },
              {
                loader: 'less-loader',
              },
            ]
          :
            ExtractTextPlugin.extract({
              fallback: {
                loader: 'style-loader',
              },
              use: [
                {
                  loader: 'css-loader',
                  options: cssLoaderOptions,
                },
                {
                  loader: 'postcss-loader',
                  options: postcssLoaderOptions,
                },
                {
                  loader: 'less-loader',
                },
              ],
            }),
        },
        {
          test: /\.(gif|jpe?g|png|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: urlLoaderOptions,
            },
            {
              loader: 'img-loader',
              options: imgLoaderOptions,
            },
          ],
        },
        {
          test: /\.(woff2?|ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: [
            {
              loader: 'url-loader',
              options: urlLoaderOptions,
            },
          ],
        },
      ],
    },
  };
};
