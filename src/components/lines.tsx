import type { HTMLAttributes } from "react";

import { cx } from "@/utilities/classname";

export type LinesProps = HTMLAttributes<HTMLDivElement>;

export const Lines = ({ className, ...props }: LinesProps) => (
  <div
    className={cx("absolute inset-0 overflow-y-hidden", className)}
    {...props}
  >
    <div className="absolute h-1/2 w-full animate-line-1 bg-white opacity-50" />
    <div className="absolute h-1/3 w-full animate-line-2 bg-white opacity-50" />
  </div>
);
