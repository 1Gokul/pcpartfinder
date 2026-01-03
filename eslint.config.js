import eslint from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
      eslint.configs.recommended,
      tseslint.configs.strict,
      eslintPluginUnicorn.configs.unopinionated,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "unicorn/better-regex": "warn",
      "unicorn/prevent-abbreviations": "off",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
    },
  },
]);
