module.exports = {
  root: true,

  env: {
    node: true,
    commonjs: true,
    es6: true,
    jquery: true
  },

  extends: [
    'plugin:vue/essential',
    "@vue/standard",
    '@vue/typescript/recommended'
  ],

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [0],
    'space-before-function-paren': [0],
    'comma-dangle': [2, 'never'],
    semi: [2, 'always'],
    '@typescript-eslint/no-explicit-any': 'off'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ],

  ignorePatterns: [
    'vue.config.js'
  ]
};
