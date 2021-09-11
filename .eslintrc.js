module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: [
    "react"
  ],
  rules: {
    indent: [
      "error",
      2
    ],
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "never"
    ],
    eqeqeq: "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "arrow-spacing": [
      "error",
      { before: true, after: true
      }
    ],
    "no-console": "error",
    "react/prop-types": 0,
  },
}