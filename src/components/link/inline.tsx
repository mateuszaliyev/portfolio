import { cx } from "cva";

import { LinkExternalIcon } from "./external-icon";
import { Link, type LinkProps } from "./link";

export type LinkInlineProps<Route> = LinkProps<Route>;

const isExternal = <Route,>(href: LinkProps<Route>["href"]) =>
  typeof href === "string" && !href.startsWith("/") && !href.startsWith("#");

export const LinkInline = <Route,>({
  children,
  className,
  href,
  ...props
}: LinkInlineProps<Route>) => (
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
