module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true
  },
  extends: [
    'airbnb-base',
    'prettier',
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
    {
      files: [
        '.eslintrc.{js,cjs}',
        'vite.config.ts'
      ],
      env: {
        node: true
      },
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
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
    extraFileExtensions: [
      'vue'
    ]
  },
  plugins: [
    'prettier',
    '@typescript-eslint',
    'promise',
    'simple-import-sort',
    'vue'
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    indent: ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'no-underscore-dangle': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 6
      },
      multiline: {
        max: 1
      }
    }],
    'no-plusplus': 'off',
    'quote-props': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
    'no-trailing-spaces': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off'
  }
};
