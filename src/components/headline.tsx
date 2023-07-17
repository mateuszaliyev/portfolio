import type { HTMLAttributes } from "react";

import { cx } from "cva";

export type HeadlineProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;
};

export const Headline = ({
  as: Component = "h2",
  className,
  ...props
}: HeadlineProps) => (
  <Component
    className={cx(
      "relative z-heading mb-8 mt-14 py-3 text-3xl font-normal text-gray-400 before:absolute before:inset-y-0 before:left-[calc(-50vw+50%)] before:z-[-1] before:w-screen before:bg-gray-100 sm:py-4 sm:text-4xl md:mb-10 md:mt-[4.5rem] md:py-6 md:text-5xl",
      className,
    )}
    {...props}
  />
);
