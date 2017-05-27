module.exports = {
  env: {
    production: {
      plugins: [
        'lodash',
      ],
    },
  },
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
  ],
  presets: [
    'react'
  ],
};
