const webpackBase = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const merge = require('webpack-merge');

module.exports = merge(webpackBase, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'client/index.html'
    })
  ]
});
