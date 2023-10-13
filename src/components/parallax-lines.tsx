import type { HTMLAttributes } from "react";

import { Lines } from "@/components/lines";

import { cx } from "@/utilities/classname";

export type ParallaxLinesProps = HTMLAttributes<HTMLElement>;

export const ParallaxLines = ({
  children,
  className,
  ...props
}: ParallaxLinesProps) => (
  <section
    className={cx(
      "relative z-[-1] flex min-h-screen scale-[2] flex-col bg-gray-100 -translate-z-px",
      className,
    )}
    {...props}
  >
    <Lines aria-hidden />
    {children}
  </section>
);
