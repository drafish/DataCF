const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [{
  entry: {
    'index': path.resolve(__dirname, '../src/index.js'),
    'iframe': path.resolve(__dirname, '../src/iframe.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: 'iframe.html',
      template: path.resolve(__dirname, '../src/iframe.html'),
      inject: false
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER_VERSION': JSON.stringify('NOT_IE')
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime'
              ]
            ]
          }
        }
      }
    ]
  }
},
{
  entry: {
    'index_ie': path.resolve(__dirname, '../src/index.js'),
    'iframe_ie': path.resolve(__dirname, '../src/iframe.js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER_VERSION': JSON.stringify('IE')
    })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: [
              [
                '@babel/plugin-transform-runtime'
              ],
              [
                '@babel/plugin-transform-modules-commonjs'
              ]
            ]
          }
        }
      }
    ]
  }
}]
