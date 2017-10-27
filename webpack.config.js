const MinifyPlugin = require('babel-minify-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');
const {
  EnvironmentPlugin,
  optimize: { ModuleConcatenationPlugin },
} = require('webpack');
const SubResourceIntegrityPlugin = require('webpack-subresource-integrity');

const HTML_MINIFIER_OPTIONS = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  includeAutoGeneratedTags: false,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true,
};

module.exports = (env = process.env.NODE_ENV) => {
  process.env.NODE_ENV = env;
  return {
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
      crossOriginLoading: 'anonymous',
      filename: env === 'production' ? '[name].[chunkhash].js' : '[name].js?[chunkhash]',
      path: path.resolve(__dirname, 'public'),
      publicPath: '/',
    },
    plugins: [
      new EnvironmentPlugin({
        NODE_ENV: env || 'development',
      }),
      new ModuleConcatenationPlugin(),
      new HtmlPlugin({
        minify: env === 'production' ? HTML_MINIFIER_OPTIONS : false,
        template: path.resolve(__dirname, 'src', 'templates', 'index.html.ejs'),
        title: 'MastodonKaigi',
      }),
      ...(env === 'production' ? [
        new SubResourceIntegrityPlugin({
          hashFuncNames: ['sha384'],
        }),
        new CopyPlugin(['_redirects', '_headers', 'favicon.ico'].map(filename => ({
          from: path.resolve(__dirname, 'src', 'templates', filename),
        }))),
        new MinifyPlugin(),
      ] : []),
    ],
  };
};
