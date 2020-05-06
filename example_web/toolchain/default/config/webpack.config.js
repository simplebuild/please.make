const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = function (env, appPath) {
  return {
    mode: env,
    entry: [
      `${appPath}/src/index`
    ],
    output: {
      path: `${appPath}/dist`
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '../assets/index.html'),
        favicon: path.join(__dirname, '../assets/favicon.ico')
      }),
      new FriendlyErrorsWebpackPlugin({
        clearConsole: env === 'development',
      })
    ],
    resolve: {
      alias: {
        '~core': path.resolve('./core'),
        '~apps': path.resolve('./apps')
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      plugins: [
        new ModuleScopePlugin(['apps/', 'core/'])
      ],
    },
    module: {
      rules: [{
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  }
};
