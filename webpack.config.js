const BabiliPlugin = require('babili-webpack-plugin');
const path = require('path');
const { EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = (env = process.env.NODE_ENV) => ({
  devServer: {
    historyApiFallback: true,
  },
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, 'src', 'main.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    chunkFilename: env === 'production' ? '[name].[chunkhash].js' : '[name].js?[chunkhash]',
    filename: env === 'production' ? '[name].[chunkhash].js' : '[name].js?[chunkhash]',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  plugins: [
    new EnvironmentPlugin({
      NODE_ENV: env || 'development',
    }),
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src', 'templates', 'index.html.ejs'),
      title: 'MastodonKaigi',
    }),
    ...(env === 'production' ? [
      new BabiliPlugin(),
    ] : []),
  ],
});
