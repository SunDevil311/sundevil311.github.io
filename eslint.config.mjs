/* ==========================================================================
eslint.config.mjs

SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== */

import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import mochaPlugin from "eslint-plugin-mocha";
import globals from "globals";

export default [
  {
    ignores: [
      "dist/**",
      "**/node_modules/**",
      "**/.vscode/**",
      "**/coverage/**",
      "**/assets/license/**",
      "**/*.xml",
      "**/babel.config.json",
      "**/package.json",
      "**/package-lock.json",
      "**/stylelint.config.js",
      ".*",
    ],
  },
  js.configs.recommended,

  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      mocha: mochaPlugin,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      "mocha/no-exclusive-tests": "error",
      "mocha/no-hooks-for-single-case": "warn",
      "indent": "off", // Turn off the 'indent' rule
      "quotes": "off", // Turn off the 'quotes' rule
      "semi": "off", // Turn off the 'semi' rule
    },
  },

  // Optional: Use plugin's recommended config
  eslintConfigPrettier,
];
