import { Fragment } from "react";

import { cva, cx, type VariantProps } from "@/satin/classname";
import { Slot, type AsChild } from "@/satin/slot";

export interface DeckProps
  extends React.ComponentProps<"p">,
    VariantProps<typeof deck> {}

export interface HeadingProps
  extends React.ComponentProps<"h2">,
    AsChild,
    VariantProps<typeof heading> {}

export interface MatchTextProps
  extends Omit<React.ComponentProps<"span">, "children"> {
  children: string;
  value: string;
}

const deck = cva({
  base: "text-balance text-gray-400",
  defaultVariants: { size: "lg" },
  variants: {
    size: { md: "text-base", lg: "text-lg leading-snug font-medium" },
  },
});

const heading = cva({
  base: "font-medium tracking-tight text-white",
  defaultVariants: { balance: true, level: 2 },
  variants: {
    balance: { true: "text-balance" },
    level: { 2: "text-4xl sm:text-6xl", 3: "text-3xl sm:text-4xl", none: "" },
  },
});

export const Deck = ({ className, size, ...props }: DeckProps) => (
  <p className={deck({ className, size })} {...props} />
);

export const Heading = ({
  asChild,
  balance,
  className,
  level,
  ...props
}: HeadingProps) => {
  const Component = asChild ? Slot : "h2";

  return (
    <Component className={heading({ balance, className, level })} {...props} />
  );
};

export const Kicker = ({ className, ...props }: React.ComponentProps<"p">) => (
  <p className={cx("text-sm text-gray-300", className)} {...props} />
);

export const MatchText = ({ children, value, ...props }: MatchTextProps) => (
  <>
    {children.split(value).map((part, index) => (
      <Fragment key={index}>
        {Boolean(index) && <span {...props}>{value}</span>}
        {part}
      </Fragment>
    ))}
  </>
);
