declare module "prettier-plugin-tailwindcss";
declare module "tailwindcss-animate";

declare module "tailwindcss/lib/util/flattenColorPalette" {
  import type {
    KeyValuePair,
    RecursiveKeyValuePair,
  } from "tailwindcss/types/config";

  const flattenColorPalette: (
    colorPalette: RecursiveKeyValuePair
  ) => KeyValuePair<string, string>;

  export default flattenColorPalette;
}
