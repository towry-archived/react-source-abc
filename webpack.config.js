
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './examples/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  resolve: {
    alias: {
      'react-dom': path.resolve(__dirname, 'packages/react-dom/cjs/react-dom.development.js'),
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ]
}
