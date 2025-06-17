import { cx } from "@/satin/classname";
import { Container, type ContainerProps } from "@/satin/container";

export const Header = ({
  children,
  ...props
}: React.ComponentProps<"header">) => (
  <header {...props}>
    <div className="pointer-events-none fixed inset-x-0 top-0 z-(--z-ambient) h-24 bg-gray-950/80 [mask-image:linear-gradient(to_bottom,#000_20%,transparent_80%)] backdrop-blur-sm" />
    {children}
  </header>
);

export const HeaderContainer = ({ className, ...props }: ContainerProps) => (
  <Container
    className={cx(
      "fixed top-2 left-1/2 z-(--z-header) -translate-x-1/2 max-sm:px-3 sm:top-4",
      className,
    )}
    {...props}
  />
);
