import js from "@eslint/js";
import prettier from "eslint-config-prettier";

/** EN: Flat config example. PT: Exemplo de flat config. */
export default [
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];
