/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
const config = {
  extends: ["eslint:recommended", "plugin:import/recommended", "prettier"],
  plugins: ["import"],
  rules: {
    "import/first": "error",
    "import/no-default-export": "warn",
    "import/no-deprecated": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/no-unassigned-import": "warn",
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
