import { cx } from "@/satin/classname";
import { Container, type ContainerProps } from "@/satin/container";
import { Image, type ImageProps } from "@/satin/image";
import { Link, type LinkProps } from "@/satin/link";

export interface FooterLogoProps
  extends Omit<ImageProps, "alt">,
    Partial<Pick<ImageProps, "alt">> {}

export const Footer = ({
  className,
  ...props
}: React.ComponentProps<"footer">) => (
  <footer
    className={cx("border-t border-gray-800 text-gray-400", className)}
    {...props}
  />
);

export const FooterContainer = ({ className, ...props }: ContainerProps) => (
  <Container className={cx("grid grid-cols-2 py-14", className)} {...props} />
);

export const FooterLink = ({ className, href, ...props }: LinkProps) => (
  <Link
    className={cx(
      "hocus-visible:text-white text-sm transition outline-none",
      className,
    )}
    href={href}
    {...props}
  />
);

export const FooterLogo = ({
  alt = "",
  className,
  ...props
}: FooterLogoProps) => (
  <Image
    alt={alt}
    className={cx("size-4.5 brightness-0 invert", className)}
    {...props}
  />
);

export const FooterSection = (props: React.ComponentProps<"section">) => (
  <section {...props} />
);

export const PreFooter = ({
  className,
  ...props
}: React.ComponentProps<"section">) => (
  <section
    className={cx(
      "bg-gradient-to-b from-transparent to-gray-900 to-45%",
      className,
    )}
    {...props}
  />
);

export const PreFooterContainer = ({ className, ...props }: ContainerProps) => (
  <Container className={cx("py-12 sm:py-24", className)} {...props} />
);
