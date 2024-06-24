module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:wdio/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'wdio',
    'eslint-plugin-wdio' 
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    es6: true,
    mocha: true,
    node: true
  }
};
