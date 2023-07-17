const project = "./tsconfig.json";

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      files: ["*.ts", "*.tsx"],
      parserOptions: {
        project,
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        disallowTypeAnnotations: false,
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};

module.exports = eslintConfig;
