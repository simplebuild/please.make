'use strict';

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const configFactory = require('../config/webpack.config');
const devServerConfigFactory = require('../config/webpackDevServer.config');

const host = process.env.HOST || '0.0.0.0';
const port = parseInt(process.env.PORT, 10) || 3000;

function start(appPath) {
  const resolvedPath = path.resolve(appPath)
  const config = configFactory(resolvedPath);
  const compiler = webpack(config);
  const devServerConfig = devServerConfigFactory();

  const devServer = new WebpackDevServer(compiler, devServerConfig);
  devServer.listen(port, host, err => {
    if (err) {
      return console.log(err);
    }

    console.log(`Dev server is listening on ${host}:${port}`);
  });
}

const args = process.argv.slice(2);
const appPath = args[0];

start(appPath)
