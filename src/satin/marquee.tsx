import { cva, cx } from "@/satin/classname";

interface MarqueeProps extends React.ComponentProps<"div"> {
  gap?: number;
}

const marqueeContent = cva({
  base: "animate-marquee flex min-w-full shrink-0 justify-around gap-(--marquee-gap) will-change-transform",
});

export const Marquee = ({
  className,
  gap = 4,
  style,
  ...props
}: MarqueeProps) => (
  <div
    className={cx(
      "flex gap-(--marquee-gap) overflow-x-hidden select-none",
      className,
    )}
    style={{ ...style, "--marquee-gap": `${gap}rem` } as React.CSSProperties}
    {...props}
  />
);

export const MarqueeContent = ({
  "aria-hidden": ariaHidden = false,
  className,
  ...props
}: React.ComponentProps<"ul">) => (
  <>
    <ul
      aria-hidden={ariaHidden}
      className={marqueeContent({ className })}
      {...props}
    />
    <ul aria-hidden className={marqueeContent({ className })} {...props} />
  </>
);

export const MarqueeItem = (props: React.ComponentProps<"li">) => (
  <li {...props} />
);
