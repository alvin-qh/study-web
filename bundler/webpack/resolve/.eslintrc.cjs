module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended'
  ],
  settings: {
    'import/resolver': {
      alias: [
        ['@', 'src']
      ]
    }
  },
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
  parser: '@babel/eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'import',
    'prettier',
    'promise',
    'simple-import-sort'
  ],
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'import/no-extraneous-dependencies': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'quote-props': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
    'no-trailing-spaces': 'warn',
    'no-plusplus': 'off',
    'comma-dangle': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off'
  }
};
