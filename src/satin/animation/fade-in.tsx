import { Fragment } from "react";

import { cva, cx, type ComponentPropsWithClassName } from "@/satin/classname";
import { Slot, type AsChild } from "@/satin/slot";

export interface FadeInProps
  extends ComponentPropsWithClassName<"div">,
    AsChild {
  delay?: number;
  disabled?: boolean;
}

export interface StaggerFadeInBlurToTop
  extends Omit<React.ComponentProps<"span">, "children"> {
  children: string;
}

const fadeIn = cva({
  base: "will-change-[opacity]",
  defaultVariants: { disabled: false },
  variants: { disabled: { false: "motion-safe:animate-fade-in" } },
});

const fadeInBlurToTop = cva({
  base: "will-change-[filter,opacity,transform]",
  defaultVariants: { disabled: false },
  variants: { disabled: { false: "motion-safe:animate-fade-in-blur-to-top" } },
});

const fadeInScaleDown = cva({
  base: "will-change-[filter,opacity,transform]",
  defaultVariants: { disabled: false },
  variants: { disabled: { false: "motion-safe:animate-fade-in-scale-down" } },
});

export const FadeIn = ({
  asChild,
  className,
  delay,
  disabled,
  style: { animationDelay, ...style } = {},
  ...props
}: FadeInProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={fadeIn({ className, disabled })}
      style={{
        ...style,
        animationDelay: (delay ? `${delay}ms` : undefined) ?? animationDelay,
      }}
      {...props}
    />
  );
};

export const FadeInBlurToTop = ({
  asChild,
  className,
  delay,
  disabled,
  style: { animationDelay, ...style } = {},
  ...props
}: FadeInProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={fadeInBlurToTop({ className, disabled })}
      style={{
        ...style,
        animationDelay: (delay ? `${delay}ms` : undefined) ?? animationDelay,
      }}
      {...props}
    />
  );
};

export const FadeInScaleDown = ({
  asChild,
  className,
  delay,
  disabled,
  style: { animationDelay, ...style } = {},
  ...props
}: FadeInProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={fadeInScaleDown({ className, disabled })}
      style={{
        ...style,
        animationDelay: (delay ? `${delay}ms` : undefined) ?? animationDelay,
      }}
      {...props}
    />
  );
};

export const StaggerFadeInBlurToTop = ({
  children,
  className,
  ...props
}: StaggerFadeInBlurToTop) => (
  <span
    className={cx(
      "motion-safe:[&>span]:animate-fade-in-blur-to-top [&>span]:inline-flex",
      className,
    )}
    {...props}
  >
    {children.split(" ").map((child, index) => (
      <Fragment key={index}>
        {index > 0 && " "}
        <FadeInBlurToTop asChild delay={400 + 40 * index} disabled>
          <span>{child}</span>
        </FadeInBlurToTop>
      </Fragment>
    ))}
  </span>
);
