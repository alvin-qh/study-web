module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'airbnb-base',
    'prettier',
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.ts', '.js', '.json']
      }
    }
  },
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}',
        'vite.config.ts'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      rules: {
        'simple-import-sort/imports': 'off'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: [
    'import',
    'prettier',
    'promise',
    'simple-import-sort',
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/quotes': ['warn', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    indent: ['warn', 2],
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': ['error', 6],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': ['warn', { max: 2, maxEOF: 0 }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': 'off',
    'no-return-await': 'off',
    'quote-props': ['error', 'as-needed'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off'
  }
};
