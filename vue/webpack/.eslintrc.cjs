module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      rules: {
        'simple-import-sort/imports': 'off'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    extraFileExtensions: [
      'vue'
    ]
  },
  plugins: [
    'vue',
    'simple-import-sort',
    'prettier'
  ],
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
        max: 10
      },
      multiline: {
        max: 1
      }
    }],
    'quote-props': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
    'no-trailing-spaces': 'warn',
    'keyword-spacing': 'warn',
  }
};
