declare module "prettier" {
  interface Config {
    importOrder?: string[];
    importOrderParserPlugins?: string[];
    importOrderTypeScriptVersion: "5.1.6";
    tailwindAttributes?: string[];
    tailwindConfig?: string;
    tailwindFunctions?: string[];
  }
}

export {};
