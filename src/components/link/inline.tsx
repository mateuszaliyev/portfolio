import { cx } from "@/utilities/classname";

import { LinkExternalIcon } from "./external-icon";
import { Link, type LinkProps } from "./link";

export type LinkInlineProps = LinkProps;

const isExternal = (href: LinkProps["href"]) =>
  typeof href === "string" && !href.startsWith("/") && !href.startsWith("#");

export const LinkInline = ({
  children,
  className,
  href,
  ...props
}: LinkInlineProps) => (
  <Link
    className={cx(
      "bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-transparent outline-none transition hover:brightness-125 focus-visible:brightness-125",
      className,
    )}
    href={href}
    {...props}
  >
    {children}
    {isExternal(href) && <LinkExternalIcon />}
  </Link>
);
