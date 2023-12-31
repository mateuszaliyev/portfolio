import { cva, cx, type VariantProps } from "@/utilities/classname";

import { Link, type LinkProps } from "./link";

export type LinkButtonProps = LinkProps & VariantProps<typeof linkButton>;

const linkButton = cva({
  base: "inline-flex bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 outline-none",
  defaultVariants: {
    variant: "primary",
  },
  variants: {
    variant: {
      primary:
        "group relative p-1 before:absolute before:inset-1 before:bg-white before:transition hover:before:opacity-0 focus-visible:before:opacity-0",
      secondary:
        "bg-clip-text text-transparent transition hover:brightness-125 focus-visible:brightness-125",
    },
  },
});

export const LinkButton = ({
  children,
  className,
  variant,
  ...props
}: LinkButtonProps) => (
  <Link className={linkButton({ className, variant })} {...props}>
    <div
      className={cx(
        "relative flex items-center justify-center bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 bg-clip-text px-4 py-2 font-medium text-transparent transition group-hover:text-white group-focus-visible:text-white",
        className,
      )}
    >
      {children}
    </div>
  </Link>
);
