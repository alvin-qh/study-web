import globals from "globals";
import js from "@eslint/js";
import pluginVue from 'eslint-plugin-vue';
import vueEslintParser from 'vue-eslint-parser';
import tsEslint from "typescript-eslint";
import pluginPrettier from 'eslint-plugin-prettier';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: [
      "**/*.vue",
      "**/*.ts",
      "**/*.js"
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.node,
      },
      ecmaVersion: 2020,
      parser: vueEslintParser,
      parserOptions: {
        parser: tsEslint.parser,
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module',
        project: ['tsconfig.json'],
        extraFileExtensions: [
          '.vue'
        ]
      },
    },
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
      'eslint-plugin-prettier': pluginPrettier
    },
    rules: {
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/quotes': ['warn', 'single'],
      '@typescript-eslint/semi': ['error', 'always'],
      '@typescript-eslint/space-before-function-paren': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      indent: ['warn', 2],
      'linebreak-style': ['error', 'unix'],
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      quotes: ['warn', 'single'],
      semi: ['error', 'always'],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'sort-imports': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 6
        },
        multiline: {
          max: 1
        }
      }],
      'quote-props': ['error', 'as-needed'],
      'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
      'no-trailing-spaces': 'warn'
    }
  }
];
