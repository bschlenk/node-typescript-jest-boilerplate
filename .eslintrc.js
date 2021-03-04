'use strict';

module.exports = {
  root: true,

  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',

  env: {
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],

  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': ['error'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: false },
    ],
  },
};
