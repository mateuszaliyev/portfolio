import cardGrid from "@/satin/assets/card-grid.svg";
import {
  cva,
  cx,
  type ComponentPropsWithClassName,
  type VariantProps,
} from "@/satin/classname";
import { Image, type ImageProps } from "@/satin/image";
import { Slot, Slottable, type AsChild } from "@/satin/slot";

import type { Logo } from "@/server/database/schema";

import { logoImageProps } from "@/utilities/logo";

export interface CardProps
  extends ComponentPropsWithClassName<"div">,
    AsChild,
    VariantProps<typeof card> {}

export interface CardGridImageProps
  extends Omit<ImageProps, "alt">,
    Partial<Pick<ImageProps, "alt">> {}

export interface CardGridLogoProps
  extends Omit<CardGridImageProps, "src">,
    Partial<Pick<CardGridImageProps, "src">> {
  logo: Logo;
}

export interface CardHeadingProps extends React.ComponentProps<"h3">, AsChild {}

export type CardIconProps = React.ComponentProps<"div">;

export interface CardIconImageProps
  extends Omit<ImageProps, "alt">,
    Partial<Pick<ImageProps, "alt">> {}

export interface CardIconLogoProps
  extends Omit<CardIconImageProps, "src">,
    Partial<Pick<CardIconImageProps, "src">> {
  logo: Logo;
}

export type CardParagraphProps = ComponentPropsWithClassName<"p">;

export interface CardsProps extends React.ComponentProps<"div">, AsChild {}

const card = cva({
  base: "group relative isolate flex flex-col gap-4 overflow-hidden rounded-xl border border-white/5 bg-[color-mix(in_oklch,var(--color-gray-900),var(--color-gray-950))] p-6 transition",
  variants: { clickable: { true: "cursor-pointer" } },
});

export const Card = ({
  asChild,
  children,
  className,
  clickable,
  ...props
}: CardProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component className={card({ className, clickable })} {...props}>
      {clickable && (
        <div
          aria-hidden
          className="group-hocus-visible:opacity-100 absolute inset-0 z-[-1] bg-radial-[18rem_18rem_at_100%_0] from-white/20 from-35% to-transparent opacity-0 mix-blend-soft-light transition"
        />
      )}
      <Slottable>{children}</Slottable>
    </Component>
  );
};

export const Cards = ({ asChild, className, ...props }: CardsProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={cx("grid grid-cols-1 gap-8 sm:grid-cols-2", className)}
      {...props}
    />
  );
};

export const CardGrid = ({
  "aria-hidden": ariaHidden = "true",
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div
    aria-hidden={ariaHidden}
    className={cx(
      "pointer-events-none absolute top-0 right-0 h-56 w-66 mask-radial-from-black mask-radial-from-20% mask-radial-to-transparent mask-radial-to-70% mask-radial-at-top-right text-white",
      className,
    )}
    {...props}
  >
    <Image alt="" className="size-full" src={cardGrid} unoptimized />
    {children}
  </div>
);

export const CardGridImage = ({
  alt = "",
  className,
  ...props
}: CardGridImageProps) => (
  <Image
    alt={alt}
    className={cx(
      "absolute top-8 right-8 w-40 pt-px pr-px opacity-10 brightness-0 invert",
      className,
    )}
    {...props}
  />
);

export const CardGridLogo = ({ logo, ...props }: CardGridLogoProps) => (
  <CardGridImage {...logoImageProps(logo)} {...props} />
);

export const CardHeading = ({
  asChild,
  className,
  ...props
}: CardHeadingProps) => {
  const Component = asChild ? Slot : "h3";

  return (
    <Component
      className={cx(
        "max-w-80 text-lg/snug font-medium tracking-tight text-balance sm:text-2xl",
        className,
      )}
      {...props}
    />
  );
};

export const CardIcon = ({ className, ...props }: CardIconProps) => (
  <div
    className={cx(
      "relative mb-14 flex size-12 items-center justify-center rounded-sm bg-gray-900 p-2 select-none",
      className,
    )}
    {...props}
  />
);

export const CardIconImage = ({
  alt = "",
  className,
  ...props
}: CardIconImageProps) => (
  <Image
    alt={alt}
    className={cx("brightness-0 invert", className)}
    {...props}
  />
);

export const CardIconLogo = ({
  logo,
  style = {},
  ...props
}: CardIconLogoProps) => (
  <CardIconImage
    style={
      logo.height <= logo.width
        ? { height: "auto", width: "100%", ...style }
        : { height: "100%", width: "auto", ...style }
    }
    {...logoImageProps(logo)}
    {...props}
  />
);

export const CardParagraph = ({ className, ...props }: CardParagraphProps) => (
  <p className={cx("text-sm text-gray-400", className)} {...props} />
);
