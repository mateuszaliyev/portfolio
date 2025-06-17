import {
  cva,
  type ComponentPropsWithClassName,
  type VariantProps,
} from "@/satin/classname";
import { Slot, type AsChild } from "@/satin/slot";

export interface ContainerProps
  extends ComponentPropsWithClassName<"div">,
    AsChild,
    VariantProps<typeof container> {}

const container = cva({
  base: "mx-auto w-full",
  defaultVariants: { padding: true, size: "md" },
  variants: {
    padding: { true: "px-[max(env(safe-area-inset-left),theme(spacing.6))]" },
    size: { full: "max-w-full", md: "max-w-5xl", sm: "max-w-3xl" },
  },
});

export const Container = ({
  asChild,
  className,
  padding,
  size,
  ...props
}: ContainerProps) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component className={container({ className, padding, size })} {...props} />
  );
};
