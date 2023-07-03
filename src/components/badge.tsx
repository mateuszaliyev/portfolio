import type { HTMLAttributes } from "react";

import { cva, type VariantProps } from "cva";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badge>;

const badge = cva(
  "inline-flex items-center rounded-md px-2 py-1 ring-1 ring-inset",
  {
    defaultVariants: {
      color: "gray",
      size: "medium",
    },
    variants: {
      color: {
        blue: "bg-blue-50 text-blue-700 ring-blue-700/10",
        emerald: "bg-emerald-50 text-emerald-700 ring-emerald-700/10",
        gray: "bg-gray-50 text-gray-600 ring-gray-500/10",
      },
      size: {
        medium: "text-sm",
        small: "text-xs",
      },
    },
  }
);

export const Badge = ({ className, color, ...props }: BadgeProps) => (
  <span className={badge({ className, color })} {...props} />
);
