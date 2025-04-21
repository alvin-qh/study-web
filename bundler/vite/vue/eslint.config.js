import globals from 'globals';

import { defineConfig } from 'eslint/config';

import js from '@eslint/js';
import ts from 'typescript-eslint';

import vueParser from 'vue-eslint-parser';

import pluginVue from 'eslint-plugin-vue';
import stylisticPlugin from '@stylistic/eslint-plugin';

export default defineConfig([
  ts.configs.recommended,
  ...ts.configs.recommended,
  stylisticPlugin.configs.customize(),
  pluginVue.configs['flat/essential'],
  {
    ignores: [
      '.history',
      'dist',
      'node_modules',
    ],
  },
  {
    files: [
      '**/*.{js,mjs,cjs,ts,vue}',
    ],
    plugins: { js },
    extends: [
      'js/recommended',
    ],
  },
  {
    files: [
      '**/*.{js,mjs,cjs,ts,vue}',
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
    },
  },
  {
    files: [
      '**/*.vue',
    ],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: ts.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      sourceType: 'module',
    },
  },
  {
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
]);
