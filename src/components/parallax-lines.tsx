import type { HTMLAttributes } from "react";

import { cx } from "cva";

import { Lines } from "@/components/lines";

export type ParallaxLinesProps = HTMLAttributes<HTMLElement>;

export const ParallaxLines = ({
  children,
  className,
  ...props
}: ParallaxLinesProps) => (
  <section
    className={cx(
      "relative z-[-1] flex min-h-screen scale-[2] flex-col bg-gray-100 -translate-z-px",
      className
    )}
    {...props}
  >
    <Lines aria-hidden />
    {children}
  </section>
);
