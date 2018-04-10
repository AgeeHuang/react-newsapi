const webpack = require('webpack');

module.exports = {
  entry: [
    './client/app/index',
  ],
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.html'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: `${__dirname}/client`,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
