import type { Options as PrettierOptions } from "prettier";

export type Options = PrettierOptions & {
  tailwindFunctions?: string[];
};
