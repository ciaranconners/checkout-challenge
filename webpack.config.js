const path = require('path');

module.exports = {
  context: __dirname,
  entry: './js/Main.jsx',
  devtool: 'cheap-eval-source-map',
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
    {
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: '/node_modules/'
    },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};