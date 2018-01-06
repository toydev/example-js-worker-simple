const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    "js/bundle": './app/main/js/site.js',
    "js/worker": './app/main/js/worker.js',
  },
  output: {
    path: __dirname + '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'post',
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      path.resolve(__dirname, 'app/main/js/'),
      "node_modules"
    ],
    extensions: ['.js']
  },
}
