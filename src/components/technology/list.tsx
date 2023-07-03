import type { HTMLAttributes } from "react";

import { cx } from "cva";

export type TechnologyListProps = HTMLAttributes<HTMLUListElement>;

export const TechnologyList = ({
  className,
  ...props
}: TechnologyListProps) => (
  <ul
    className={cx(
      "not-prose flex list-none flex-wrap gap-3 md:gap-4",
      className
    )}
    {...props}
  />
);
