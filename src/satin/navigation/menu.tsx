import {
  Content,
  Link as InternalLink,
  Item,
  List,
  Root,
  Trigger,
  Viewport,
  type NavigationMenuContentProps,
  type NavigationMenuItemProps,
  type NavigationMenuListProps,
  type NavigationMenuProps,
  type NavigationMenuTriggerProps,
  type NavigationMenuViewportProps,
} from "@radix-ui/react-navigation-menu";

import { cva, cx, type VariantProps } from "@/satin/classname";
import {
  CollapsibleContent,
  CollapsibleTrigger,
  type CollapsibleContentProps,
  type CollapsibleTriggerProps,
} from "@/satin/collapsible";
import { Image, type ImageProps } from "@/satin/image";
import { Link, type LinkProps } from "@/satin/link";
import { Slot, type AsChild } from "@/satin/slot";

export { Collapsible as NavigationMenuDropdown } from "@/satin/collapsible";

export interface NavigationMenuDropdownContentProps
  extends CollapsibleContentProps,
    VariantProps<typeof navigationMenuDropdownContent> {}

export interface NavigationMenuDropdownTriggerProps
  extends React.ComponentProps<"button">,
    AsChild {}

export interface NavigationMenuLinkProps extends LinkProps, AsChild {
  active?: boolean;
}

const navigationMenuDropdownContent = cva({
  base: "flex flex-col px-2 pt-8 pb-6",
  defaultVariants: { height: "auto" },
  variants: { height: { auto: "", full: "h-[calc(100dvh-4.5rem)]" } },
});

export const NavigationMenu = ({
  children,
  className,
  ...props
}: NavigationMenuProps) => (
  <Root
    // className={cx(
    //   "group relative grid-rows-[min-content_0fr] rounded-2xl border border-white/10 bg-gray-950/20 px-3 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 has-[:checked]:grid-rows-[min-content_1fr] has-[:checked]:bg-gray-950/80 has-[[data-state=open]]:bg-gray-950/80 max-sm:grid sm:-mx-3",
    //   className,
    // )}
    className={cx(
      "group relative rounded-2xl border border-white/8 bg-gray-950/20 px-3 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 has-[[data-state=open]]:bg-gray-950/80 sm:-mx-3",
      className,
    )}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </Root>
);

export const NavigationMenuContent = ({
  className,
  ...props
}: NavigationMenuContentProps) => (
  <Content
    className={cx(
      "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full pb-3 md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
);

export const NavigationMenuDropdownContent = ({
  className,
  height,
  ...props
}: NavigationMenuDropdownContentProps) => (
  <CollapsibleContent
    className={navigationMenuDropdownContent({ className, height })}
    {...props}
  />
);

export const NavigationMenuDropdownItem = (
  props: React.ComponentProps<"li">,
) => <li {...props} />;

export const NavigationMenuDropdownList = ({
  className,
  ...props
}: React.ComponentProps<"ul">) => (
  <ul
    className={cx(
      "grid grid-cols-2 gap-4 text-xl font-medium tracking-tight",
      className,
    )}
    {...props}
  />
);

export const NavigationMenuItem = ({
  className,
  ...props
}: NavigationMenuItemProps) => (
  <Item className={cx("flex flex-col", className)} {...props} />
);

export const NavigationMenuDropdownItemTrigger = ({
  asChild,
  className,
  ...props
}: NavigationMenuDropdownTriggerProps) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={cx(
        "hocus-visible:text-gray-400 cursor-pointer transition outline-none",
        className,
      )}
      {...props}
    />
  );
};

export const NavigationMenuDropdownTrigger = ({
  className,
  ...props
}: CollapsibleTriggerProps) => (
  <CollapsibleTrigger
    className={cx(
      "group relative flex aspect-square h-full grow cursor-pointer items-center justify-center",
      className,
    )}
    {...props}
  >
    <span className="sr-only">Toggle menu</span>
    <div className="relative size-4">
      <div
        aria-hidden
        className="group-hocus-visible:bg-white pointer-events-none absolute top-1/3 left-1/2 h-px w-7/8 origin-center -translate-x-1/2 bg-gray-300 transition-all group-data-[state=open]:top-1/2 group-data-[state=open]:-translate-y-1/2 group-data-[state=open]:rotate-45"
      />
      <div
        aria-hidden
        className="group-hocus-visible:bg-white pointer-events-none absolute top-2/3 left-1/2 h-px w-7/8 origin-center -translate-x-1/2 bg-gray-300 transition-all group-data-[state=open]:top-1/2 group-data-[state=open]:-translate-y-1/2 group-data-[state=open]:-rotate-45"
      />
    </div>
  </CollapsibleTrigger>
);

export const NavigationMenuLink = ({
  active,
  ...props
}: NavigationMenuLinkProps) => (
  <InternalLink active={active} asChild>
    <Link {...props} />
  </InternalLink>
);

export const NavigationMenuList = ({
  className,
  ...props
}: NavigationMenuListProps) => (
  <List
    className={cx(
      "flex h-12 justify-between text-sm font-medium text-gray-300 max-sm:-mr-3",
      className,
    )}
    {...props}
  />
);

export const NavigationMenuLogo = ({
  alt = "",
  className,
  ...props
}: ImageProps) => (
  <Image
    alt={alt}
    className={cx("size-6 brightness-0 invert", className)}
    {...props}
  />
);

export const NavigationMenuSocialItem = ({
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li className={cx("flex aspect-square h-full", className)} {...props} />
);

export const NavigationMenuSocialLink = ({
  className,
  ...props
}: LinkProps) => (
  <Link
    className={cx(
      "hocus-visible:bg-gray-800 flex size-full items-center justify-center rounded-lg transition outline-none [&>svg]:size-4.5",
      className,
    )}
    {...props}
  />
);

export const NavigationMenuSocialList = ({
  className,
  ...props
}: React.ComponentProps<"ul">) => (
  <ul className={cx("flex h-12 items-center gap-4", className)} {...props} />
);

export const NavigationMenuTrigger = ({
  className,
  ...props
}: NavigationMenuTriggerProps) => (
  <Trigger
    className={cx(
      "hocus-visible:text-white flex grow cursor-pointer items-center px-3 transition outline-none",
      className,
    )}
    {...props}
  />
);

export const NavigationMenuViewport = ({
  className,
  ...props
}: NavigationMenuViewportProps) => (
  <div>
    <Viewport
      className={cx(
        "origin-top-center data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out relative w-full overflow-hidden transition-[height] data-[state=closed]:h-0 data-[state=open]:h-(--radix-navigation-menu-viewport-height)",
        className,
      )}
      {...props}
    />
  </div>
);
