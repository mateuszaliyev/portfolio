import { cx } from "@/satin/classname";
import { inter } from "@/satin/font";

export const Body = ({ className, ...props }: React.ComponentProps<"body">) => (
  <body
    className={cx(
      "flex min-h-dvh flex-col bg-gray-950 font-sans text-white antialiased [font-feature-settings:'ss03'] [text-rendering:optimizeLegibility] selection:bg-[#4ea7fc] selection:text-white",
      inter.variable,
      className,
    )}
    {...props}
  />
);
