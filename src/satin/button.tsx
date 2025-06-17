import { cva, cx, type VariantProps } from "@/satin/classname";
import { Slot, Slottable, type AsChild } from "@/satin/slot";

export interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "color">,
    AsChild,
    VariantProps<typeof button> {
  glow?: boolean;
  shine?: boolean;
}

const button = cva({
  base: "group/button relative flex cursor-pointer items-center justify-center gap-2 border text-center font-medium transition-all outline-none disabled:cursor-not-allowed has-[.truncate]:truncate",
  compoundVariants: [
    {
      className: "not-disabled:active:scale-97",
      scale: true,
      variant: ["contained", "text"],
    },
    {
      className: "px-4 py-2 text-base",
      size: "lg",
      variant: ["contained", "outlined", "text"],
    },
    {
      className: "px-3 py-1.5 text-sm",
      size: "md",
      variant: ["contained", "outlined", "text"],
    },
    {
      className: "rounded-[0.625rem]",
      rounded: false,
      size: "lg",
      variant: ["contained", "outlined", "text"],
    },
    {
      className: "rounded-lg",
      rounded: false,
      size: "md",
      variant: ["contained", "outlined", "text"],
    },
    {
      className:
        "disabled:border-gray-700 disabled:bg-gray-800 disabled:text-gray-500",
      variant: "contained",
    },
    {
      className: "cursor-not-allowed bg-gray-800 text-gray-500 ring-gray-700",
      color: "disabled",
      variant: "contained",
    },
    {
      className:
        "hocus-visible:bg-white hocus-visible:border-white border-gray-200 bg-gray-200 text-gray-950",
      color: "primary",
      variant: "contained",
    },
    {
      className:
        "hocus-visible:bg-gray-700 hocus-visible:border-gray-500 border-gray-700 bg-gray-800 text-gray-100",
      color: "secondary",
      variant: "contained",
    },
    {
      className:
        "hocus-visible:border-white hocus-visible:text-white border-gray-200 text-gray-200",
      color: "primary",
      variant: "outlined",
    },
    {
      className: "hocus-visible:border-gray-800 border-white/5 text-gray-500",
      color: "secondary",
      variant: "outlined",
    },
    {
      className:
        "hocus-visible:bg-gray-800 hocus-visible:border-gray-800 border-transparent",
      variant: "text",
    },
  ],
  defaultVariants: {
    color: "primary",
    rounded: false,
    scale: true,
    size: "md",
    variant: "contained",
  },
  variants: {
    color: { disabled: "", primary: "", secondary: "" },
    rounded: { true: "rounded-full" },
    scale: { true: "" },
    size: { icon: "size-8 rounded-md", lg: "", md: "" },
    variant: { contained: "", outlined: "", text: "" },
  },
});

export const Button = ({
  asChild,
  children,
  className,
  color,
  disabled,
  glow,
  rounded,
  scale,
  shine,
  size,
  variant,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={button({
        className,
        color: disabled ? "disabled" : color,
        rounded,
        scale,
        size,
        variant,
      })}
      disabled={disabled}
      {...props}
    >
      {!disabled && glow && (
        <span
          aria-hidden
          className="z-background group-hocus-visible/button:opacity-30 pointer-events-none absolute inset-0 flex bg-white opacity-0 blur-2xl transition duration-300"
        />
      )}
      <Slottable>{children}</Slottable>
      {!disabled && shine && (
        <span
          aria-hidden
          className="group-hocus-visible/button:animate-shine pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(110deg,transparent,35%,rgba(255,255,255,.7),75%,transparent)] bg-[length:200%_100%] opacity-0"
        />
      )}
    </Component>
  );
};

export const ButtonTruncate = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span className={cx("truncate", className)} {...props} />
);
