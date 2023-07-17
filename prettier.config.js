/** @type {import("prettier").Config} */
const prettierConfig = {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  importOrder: [
    "<BUILTIN_MODULES>",
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "^(@/app)(.*|$)",
    "^(@/assets)(.*|$)",
    "^(@/components)(.*|$)",
    "^(@/constants)(.*|$)",
    "^(@/environment)(.*|$)",
    "^(@/hooks)(.*|$)",
    "^(@/types)(.*|$)",
    "^(@/utilities)(.*|$)",
    "^[.]",
  ].reduce((result, element, index) => {
    if (index) result.push("", element);
    else result.push(element);
    return result;
  }, /** @type {string[]} */ ([])),
  importOrderTypeScriptVersion: "5.1.6",
  jsxSingleQuote: false,
  plugins: [
    require("@ianvs/prettier-plugin-sort-imports"),
    require("prettier-plugin-tailwindcss"),
  ],
  printWidth: 80,
  proseWrap: "always",
  quoteProps: "as-needed",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  tailwindAttributes: [
    "enter",
    "enterFrom",
    "enterTo",
    "leave",
    "leaveFrom",
    "leaveTo",
  ],
  tailwindFunctions: ["cva", "cx"],
  trailingComma: "all",
  useTabs: false,
};

module.exports = prettierConfig;
