const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    'index': path.resolve(__dirname, '../src/index.js'),
    'index_ie': path.resolve(__dirname, '../src/index_ie.js'),
    'deviceId': path.resolve(__dirname, '../src/deviceId.js')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html'),
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: 'deviceId.html',
      template: path.resolve(__dirname, '../src/deviceId.html'),
      inject: false
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
}
