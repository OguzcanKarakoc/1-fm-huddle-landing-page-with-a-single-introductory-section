import js from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import onlyWarn from "eslint-plugin-only-warn"
import turboPlugin from "eslint-plugin-turbo"
import tseslint from "typescript-eslint"
import stylistic from '@stylistic/eslint-plugin';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  stylistic.configs.recommended,
  {
    files: [
      '**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}',
      '**/.eslintrc.{js,cjs,mjs}',
    ],
    plugins: {
      turbo: turboPlugin,
      '@stylistic': stylistic,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      'no-console': 'error',
    },
  },
  // {
  //   plugins: {
  //     onlyWarn,
  //   },
  // },
  {
    ignores: ["dist/**"],
  },
]
