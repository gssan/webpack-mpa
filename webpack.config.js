var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

module.exports = {
  entry: {
    'index': './src/pages/index.js',
    'product': './src/pages/product.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      chunks: ['common', 'index'],
      filename: __dirname + '/dist/index.html',
      template: './src/pages/index.html'
    }),
    new HtmlWebpackPlugin({
      title: '产品页',
      chunks: ['common', 'product'],
      filename: __dirname + '/dist/product.html',
      template: './src/pages/product.html'
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'core.bundle.js',
      minChunks: 2
    })
  ]
}
