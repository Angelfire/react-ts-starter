const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [paths.src + '/index.tsx'],

  output: {
    filename: '[name].bundle.js',
    path: paths.build,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        exclude: '/node_modules/',
        test: /\.(ts|js)x?$/,
        use: 'ts-loader',
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: paths.src + '/index.html'
    }),
  ]
};
