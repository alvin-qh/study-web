module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
    'eslint:recommended'
  ],
  overrides: [
    {
      files: [
        '.eslintrc.{js,cjs}'
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
  parser: '@babel/eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'simple-import-sort',
    'prettier'
  ],
  rules: {
    indent: ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'quote-props': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
    'no-trailing-spaces': 'warn'
  }
};
