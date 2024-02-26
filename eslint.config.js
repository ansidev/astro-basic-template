import jseslint from '@eslint/js'
import tsEslintParser from '@typescript-eslint/parser'
import eslintAstroPlugin  from 'eslint-plugin-astro'
import eslintSimpleImportSortPlugin  from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const sharedConfigs = {
  quotes: 'single',
  semicolon: false,
}

export default [
  {
    ignores: ['.gitignore'],
    plugins: {
      'simple-import-sort': eslintSimpleImportSortPlugin,
    },
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2023,
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      'comma-spacing': [
        'error',
        {
          'before': false,
          'after': true
        }
      ],
      'quotes': ['error', sharedConfigs.quotes],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    files: ['src/**/*.astro'],
    plugins: {
      'astro': eslintAstroPlugin,
    },
    ...tseslint.configs.eslintRecommended,
    ...{ rules: eslintAstroPlugin.configs.recommended.rules },
    languageOptions: {
      parser: tsEslintParser,
    },
    rules: {
      'astro/semi': ['error', sharedConfigs.semicolon ? 'always' : 'never'],
    }
  },
  {
    files: ['*.ts'],
    ...jseslint.configs.recommended,
    ...tseslint.configs.eslintRecommended,
    languageOptions: {
      parser: tsEslintParser,
    }
  },
  {
    files: ['*.mjs'],
    ...jseslint.configs.recommended,
  },
]
