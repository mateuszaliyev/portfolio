import { cx } from "@/satin/classname";

export const Html = ({ className, ...props }: React.ComponentProps<"html">) => (
  <html
    className={cx(
      "scroll-smooth [color-scheme:dark] max-sm:scroll-pt-8",
      className,
    )}
    {...props}
  />
);
