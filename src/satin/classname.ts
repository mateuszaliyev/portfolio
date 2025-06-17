import { defineConfig, type CXOptions } from "cva";
import { extendTailwindMerge } from "tailwind-merge";

export type { VariantProps } from "cva";

export type ClassName = CXOptions[number];

export type ComponentPropsWithClassName<
  T extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<unknown>,
> = Omit<
  T extends React.JSXElementConstructor<infer Props>
    ? Props
    : T extends keyof React.JSX.IntrinsicElements
      ? React.JSX.IntrinsicElements[T]
      : /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
        {},
  "className"
> & {
  className?: ClassName;
};

export const { compose, cva, cx } = defineConfig({
  hooks: {
    onComplete: extendTailwindMerge({
      extend: { classGroups: { shadow: [{ shadow: ["glow"] }] } },
    }),
  },
});
