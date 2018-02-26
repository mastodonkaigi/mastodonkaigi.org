const config = {
  plugins: [
    '@babel/proposal-class-properties',
    ['@babel/proposal-object-rest-spread', { useBuiltIns: true }],
    '@babel/syntax-dynamic-import',
  ],
  presets: [
    '@babel/react',
  ],
};

switch (process.env.BABEL_ENV || process.env.NODE_ENV) {
  case 'production':
    config.plugins.push('lodash');
    break;
  case 'test':
    config.plugins.push('@babel/transform-modules-commonjs');
    break;
  default:
    break;
}

module.exports = config;
