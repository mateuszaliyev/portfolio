import type { HTMLAttributes } from "react";

import { cx } from "@/utilities/classname";

export type TechnologyListProps = HTMLAttributes<HTMLUListElement>;

export const TechnologyList = ({
  className,
  ...props
}: TechnologyListProps) => (
  <ul
    className={cx("not-prose flex list-none flex-wrap gap-3", className)}
    {...props}
  />
);
