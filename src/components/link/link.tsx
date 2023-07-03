import { type ForwardedRef, forwardRef } from "react";

import {
  default as NextLink,
  type LinkProps as NextLinkProps,
} from "next/link";

declare module "react" {
  function forwardRef<T, Props = {}>(
    render: (props: Props, ref: Ref<T>) => ReactElement | null
  ): (props: Props & RefAttributes<T>) => ReactElement | null;
}

export type LinkProps<Route> = NextLinkProps<Route>;

const noReferrerRel = <Route,>(
  href: LinkProps<Route>["href"],
  rel: LinkProps<Route>["rel"]
) => {
  if (typeof href === "string" && (href[0] === "/" || href[0] === "#")) {
    return rel;
  }

  if (rel?.split(" ").includes("noreferrer")) return rel;
  return rel ? `${rel} noreferrer` : "noreferrer";
};

const LinkWithForwardedRef = <Route,>(
  { href, rel, ...props }: LinkProps<Route>,
  ref: ForwardedRef<HTMLAnchorElement>
) => (
  <NextLink
    href={href}
    // @ts-expect-error Property `ref` does not exist on type (https://github.com/vercel/next.js/issues/51907)
    ref={ref}
    rel={noReferrerRel(href, rel)}
    {...props}
  />
);

export const Link = forwardRef(LinkWithForwardedRef);
