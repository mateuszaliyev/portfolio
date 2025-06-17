import { cva, cx } from "@/satin/classname";
import { Image, type ImageProps } from "@/satin/image";
import { Link, type LinkProps } from "@/satin/link";

interface ListItemLinkProps
  extends Omit<LinkProps, "href">,
    Partial<Pick<LinkProps, "href">> {}

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

export const ListItemIcon = ({ alt = "", className, ...props }: ImageProps) => (
  <Image
    alt={alt}
    className={cx(
      "group-[a]:group-hocus-visible:opacity-100 size-5 opacity-50 brightness-0 invert transition",
      className,
    )}
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
