import globals from 'globals';

import js from '@eslint/js';
import ts from 'typescript-eslint';

import stylisticPlugin from '@stylistic/eslint-plugin';

import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  stylisticPlugin.configs.customize(),
  ...ts.configs.recommended,
  {
    files: [
      '**/*.ts',
      '**/*.js',
      '**/*.mjs',
      '**/*.cjs',
    ],
  },
  {
    ignores: [
      '.history',
      'dist',
      'node_modules',
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      sourceType: 'module',
    },
    plugins: { },
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        args: 'none',
        ignoreRestSiblings: true,
      }],
      '@typescript-eslint/no-use-before-define': 'off',
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      }],
      'import/no-extraneous-dependencies': 'off',
      indent: ['warn', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'unix'],
      'no-duplicate-imports': 'error',
      'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-return-await': 'error',
      'no-trailing-spaces': 'warn',
      'no-underscore-dangle': 'off',
      'no-unneeded-ternary': 'error',
      'object-curly-newline': ['error', {
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
        },
        ImportDeclaration: {
          minProperties: 5,
          multiline: true,
        },
        ObjectExpression: {
          minProperties: 3,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 3,
          multiline: true,
        },
      }],
      'prefer-object-spread': 'error',
      'quote-props': ['error', 'as-needed'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      quotes: ['warn', 'single', { avoidEscape: true }],
      '@stylistic/quotes': ['warn', 'single', { avoidEscape: true }],
      'require-await': 'off',
      semi: ['error', 'always'],
      '@stylistic/semi': ['error', 'always'],
      'sort-imports': ['warn', {
        allowSeparatedGroups: true,
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      }],
    },
  },
];
