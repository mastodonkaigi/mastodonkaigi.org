module.exports = {
  dotfiles: true,
  env: {
    browser: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  root: true,
  rules: {
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: true,
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js'],
      },
    ],
  },
};
