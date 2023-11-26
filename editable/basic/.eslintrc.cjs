module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard-with-typescript",
    "plugin:jsx-a11y/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json"
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "jsx-a11y"
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["warn", "double"],
    indent: ["warn", 2],
    "sort-imports": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": ["error", "unix"],
    "import/no-absolute-path": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/quotes": ["warn", "double"],
    "@typescript-eslint/no-non-null-assertion": "off"
  }
};
