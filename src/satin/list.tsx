import { cva, cx } from "@/satin/classname";
import { Image, type ImageProps } from "@/satin/image";
import { Link, type LinkProps } from "@/satin/link";

import type { Logo } from "@/server/database/schema";

import { logoImageProps } from "@/utilities/logo";

export interface ListItemIconImageProps
  extends Omit<ImageProps, "alt">,
    Partial<Pick<ImageProps, "alt">> {}

interface ListItemLinkProps
  extends Omit<LinkProps, "href">,
    Partial<Pick<LinkProps, "href">> {}

export interface ListItemIconLogoProps
  extends Omit<ListItemIconImageProps, "src">,
    Partial<Pick<ListItemIconImageProps, "src">> {
  logo: Logo;
}

const listItemLink = cva({
  base: "group relative col-span-full grid min-h-14 grid-cols-subgrid items-center outline-none",
  variants: {
    clickable: {
      true: "hocus-visible:before:opacity-5 py-3 before:absolute before:-inset-x-[max(env(safe-area-inset-left),theme(spacing.6))] before:inset-y-0 before:rounded-xl before:bg-white before:opacity-0 before:transition",
    },
  },
});

export const List = ({ className, ...props }: React.ComponentProps<"ul">) => (
  <ul
    className={cx(
      "grid gap-x-4 divide-y divide-white/5 text-sm font-medium text-gray-400",
      className,
    )}
    {...props}
  />
);

export const ListItem = ({
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    className={cx("col-span-full grid grid-cols-subgrid", className)}
    {...props}
  />
);

export const ListItemIcon = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    className={cx(
      "group-[a]:group-hocus-visible:opacity-100 flex size-5 items-center justify-center opacity-50 transition",
      className,
    )}
    {...props}
  />
);

export const ListItemIconImage = ({
  alt = "",
  className,
  ...props
}: ListItemIconImageProps) => (
  <Image
    alt={alt}
    className={cx("brightness-0 invert", className)}
    {...props}
  />
);

export const ListItemIconLogo = ({
  logo,
  style = {},
  ...props
}: ListItemIconLogoProps) => (
  <ListItemIconImage
    style={
      logo.height <= logo.width
        ? { height: "auto", width: "100%", ...style }
        : { height: "100%", width: "auto", ...style }
    }
    {...logoImageProps(logo)}
    {...props}
  />
);

export const ListItemLink = ({
  className,
  href,
  target,
  ...props
}: ListItemLinkProps) => {
  if (href) {
    return (
      <Link
        className={listItemLink({ className, clickable: true })}
        href={href}
        target={target}
        {...props}
      />
    );
  }

  return (
    <div
      className={listItemLink({ className })}
      {...(props as React.ComponentProps<"div">)}
    />
  );
};

export const ListItemTitle = ({
  className,
  ...props
}: React.ComponentProps<"p">) => (
  <p className={cx("truncate text-gray-300", className)} {...props} />
);
