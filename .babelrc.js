const env = process.env.BABEL_ENV || process.env.NODE_ENV;

module.exports = {
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    env === 'production' && 'lodash',
  ].filter(Boolean),
  presets: [
    'react'
  ],
};
