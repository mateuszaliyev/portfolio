import type { HTMLAttributes } from "react";

import { cva, type VariantProps } from "@/utilities/classname";

export type ContainerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof container>;

const container = cva({
  base: "w-full px-6 xl:px-20",
  defaultVariants: {
    size: "medium",
  },
  variants: {
    size: {
      large: "",
      medium: "mx-auto max-w-screen-xl",
    },
  },
});

export const Container = ({ className, size, ...props }: ContainerProps) => (
  <div className={container({ className, size })} {...props} />
);
