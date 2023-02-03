const { quotes, semicolon } = require('./eslint.config.cjs')

module.exports = {
  plugins: ['simple-import-sort'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'quotes': ['error', quotes],
    'astro/semi': ['error', semicolon ? 'always' : 'never'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.astro'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:astro/recommended',
      ],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
      ],
      parser: '@typescript-eslint/parser',
    },
    {
      files: ['*.mjs'],
      extends: ['eslint:recommended'],
    }
  ]
}
