const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (appPath) {
  return {
    entry: [
      `${appPath}/src/index`
    ],
    output: {
      path: `${appPath}/dist`
    },
    plugins: [
      new HtmlWebpackPlugin()
    ],
    resolve: {
      alias: {
        core: path.resolve('./core')
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          enforce: 'pre',
          use: [
            {
              options: {
                eslintPath: require.resolve('eslint')
              },
              loader: require.resolve('eslint-loader')
            }
          ],
          exclude: /node_modules/
        },
        {
          oneOf: [
            // Process application JS with Babel.
            // The preset includes JSX, TypeScript, and some ESnext features.
            {
              test: /\.(js|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve(
                  'babel-preset-react-app/webpack-overrides'
                ),
                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent:
                            '@svgr/webpack?-svgo,+titleProp,+ref![path]',
                        },
                      },
                    },
                  ],
                ],
                // This is a feature of `babel-loader` for webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                // cacheCompression: isEnvProduction,
                // compact: isEnvProduction,
              },
            },
            // Process any JS outside of the app with Babel.
            // Unlike the application JS, we only compile the standard ES features.
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                presets: [
                  [
                    require.resolve('babel-preset-react-app/dependencies'),
                    { helpers: true },
                  ],
                ],
                cacheDirectory: true,
                // cacheCompression: isEnvProduction,

                // If an error happens in a package, it's possible to be
                // because it was compiled. Thus, we don't want the browser
                // debugger to show the original code. Instead, the code
                // being evaluated would be much more helpful.
                sourceMaps: false,
              },
            },
          ]
        }
      ]
    }
  }
};
