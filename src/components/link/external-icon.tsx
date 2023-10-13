import type { HTMLAttributes } from "react";

import { ExternalLinkIcon } from "@/components/icons/external-link";

import { cx } from "@/utilities/classname";

export type LinkExternalIconProps = HTMLAttributes<HTMLElement>;

export const LinkExternalIcon = ({
  "aria-hidden": ariaHidden = true,
  className,
  ...props
}: LinkExternalIconProps) => {
  return (
    <sup
      aria-hidden={ariaHidden}
      className={cx("relative inline-flex h-[0.75em] w-[0.75em]", className)}
      {...props}
    >
      <ExternalLinkIcon
        className="h-full w-full"
        fill="url(#gradient-cyan-sky-blue)"
      />
      <ExternalLinkIcon className="absolute h-full w-full" />
    </sup>
  );
};
