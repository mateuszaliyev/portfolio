import { cx } from "@/satin/classname";
import { Container, type ContainerProps } from "@/satin/container";

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
