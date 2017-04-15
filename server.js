const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config')({ dev: true });

config.output.publicPath = '/';

const PORT = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening at http://localhost:${PORT}/`);
  }
});
