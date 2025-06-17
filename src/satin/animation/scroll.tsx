import { Slot } from "@radix-ui/react-slot";

import { cx } from "@/satin/classname";
import { AsChild } from "@/satin/slot";

export interface ScrollDrivenAnimationConicProps
  extends React.ComponentProps<"div">,
    AsChild {}

export interface ScrollDrivenAnimationFadeInBlurToTopProps
  extends React.ComponentProps<"div">,
    AsChild {}

export const ScrollDrivenAnimationConic = ({
  asChild,
  className,
  ...props
}: ScrollDrivenAnimationConicProps) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      className={cx(
        "supports-scroll-driven-animations:motion-safe:animate-scroll-progress bg-spotlight will-change-[background,opacity] ![animation-range:0dvh_25dvh] ![animation-timeline:view()] sm:![animation-range:0dvh_50dvh]",
        className,
      )}
      {...props}
    />
  );
};

export const ScrollDrivenAnimationFadeInBlurToTop = ({
  asChild,
  className,
  ...props
}: ScrollDrivenAnimationFadeInBlurToTopProps) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      className={cx(
        "animate-scroll-progress will-change-[filter,opacity,transform] [animation-range:0vh_25vh] [animation-timeline:view()] supports-scroll-driven-animations:motion-safe:translate-y-[calc((1-var(--scroll-progress))*min(30%,4rem))] supports-scroll-driven-animations:motion-safe:opacity-[clamp(0.1,var(--scroll-progress),1)] supports-scroll-driven-animations:motion-safe:blur-[calc((1-var(--scroll-progress))*5px)] sm:[animation-range:0dvh_50dvh]",
        className,
      )}
      {...props}
    />
  );
};
