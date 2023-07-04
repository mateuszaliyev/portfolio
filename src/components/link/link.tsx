import { forwardRef, type Ref } from "react";

import {
  default as NextLink,
  type LinkProps as NextLinkProps,
} from "next/link";

declare module "react" {
  function forwardRef<T, Props = {}>(
    render: (props: Props, ref: Ref<T>) => ReactElement | null
  ): (props: Props & RefAttributes<T>) => ReactElement | null;
}

export type LinkProps<Route> = Omit<NextLinkProps<Route>, "ref"> & {
  ref?: Ref<HTMLAnchorElement>;
};

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
  { href, rel, ...props }: Omit<LinkProps<Route>, "ref">,
  ref: Ref<HTMLAnchorElement>
) => (
  <NextLink href={href} ref={ref} rel={noReferrerRel(href, rel)} {...props} />
);

export const Link = forwardRef(LinkWithForwardedRef);
