module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
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
  ignorePatterns: [
    '.eslintrc.cjs',
    'dist'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
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
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/indent': ['warn', 2, { SwitchCase: 0 }],
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/return-await': 'error',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'indent': 'off',
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': 'off',
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'n/no-callback-literal': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-return-await': 'off',
    'no-trailing-spaces': 'warn',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['warn', 'single'],
    'semi': ['error', 'always'],
    'sort-imports': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3
      },
      multiline: {
        max: 1
      }
    }]
  }
};
