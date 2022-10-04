/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  rules: {
    "import/first": "error",
    "import/no-default-export": "warn",
    "import/no-deprecated": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-unassigned-import": "error",
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/order": [
      "error",
      {
        alphabetize: { caseInsensitive: true, order: "asc" },
        groups: [["builtin", "external"], "parent", ["sibling", "index"]],
        "newlines-between": "always",
      },
    ],
  },
};

module.exports = config;
