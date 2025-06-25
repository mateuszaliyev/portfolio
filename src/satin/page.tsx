import {
  ScrollDrivenAnimationConic,
  ScrollDrivenAnimationFadeInBlurToTop,
  type ScrollDrivenAnimationConicProps,
  type ScrollDrivenAnimationFadeInBlurToTopProps,
} from "@/satin/animation/scroll";
import { cva, cx, type VariantProps } from "@/satin/classname";
import { Container, type ContainerProps } from "@/satin/container";
import {
  Deck,
  Heading,
  type DeckProps,
  type HeadingProps,
} from "@/satin/typography";

export interface MainProps
  extends React.ComponentProps<"main">,
    VariantProps<typeof main> {}

export interface SectionProps extends React.ComponentProps<"section"> {
  conic?: boolean;
}

export interface SectionButtonsProps
  extends React.ComponentPropsWithRef<"div">,
    VariantProps<typeof sectionButtons> {}

export interface SectionContainerProps
  extends Omit<ContainerProps, "padding">,
    VariantProps<typeof sectionContainer> {
  animated?: boolean;
}

export type SectionDeckProps = DeckProps;

export type SectionHeaderProps = React.ComponentProps<"header">;

export type SectionHeadingProps = HeadingProps;

const main = cva({ variants: { padding: { header: "pt-14.5 sm:pt-16.5" } } });

const sectionButtons = cva({
  base: "flex items-center justify-center gap-4",
  defaultVariants: { align: "center", margin: "lg" },
  variants: {
    align: { center: "justify-center", start: "justify-start" },
    margin: { lg: "mt-10", md: "mt-6", sm: "mt-4" },
  },
});

const sectionContainer = cva({
  compoundVariants: [
    { className: "py-12 sm:py-40", padding: [true, "vertical"] },
  ],
  defaultVariants: { padding: true },
  variants: {
    padding: {
      false: "",
      horizontal: "",
      true: "",
      vertical: "py-12 sm:py-40",
    },
  },
});

const sectionDeck = cva({
  base: "md:w-5/12",
  defaultVariants: { size: "lg" },
  variants: { size: { lg: "mt-8", md: "mt-6" } },
});

export const Indicator = ({
  className,
  ...props
}: Omit<React.ComponentProps<"span">, "children">) => (
  <span
    className={cx("inline-flex h-2 w-3.5 rounded-full", className)}
    {...props}
  />
);

export const Main = ({ className, padding, ...props }: MainProps) => (
  <main className={main({ className, padding })} {...props} />
);

export const Section = ({ children, conic, ...props }: SectionProps) => {
  if (conic) {
    return (
      <ScrollDrivenAnimationConic
        asChild
        {...(props as ScrollDrivenAnimationConicProps)}
      >
        <section>{children}</section>
      </ScrollDrivenAnimationConic>
    );
  }

  return <section {...props}>{children}</section>;
};

export const SectionButtons = ({
  align,
  className,
  margin,
  ...props
}: SectionButtonsProps) => (
  <div className={sectionButtons({ align, className, margin })} {...props} />
);

export const SectionContainer = ({
  animated,
  children,
  className,
  padding = true,
  ...props
}: SectionContainerProps) =>
  animated ? (
    <ScrollDrivenAnimationFadeInBlurToTop
      asChild
      className={sectionContainer({ className, padding })}
      {...(props as ScrollDrivenAnimationFadeInBlurToTopProps)}
    >
      <Container padding={padding === "horizontal" || padding === true}>
        {children}
      </Container>
    </ScrollDrivenAnimationFadeInBlurToTop>
  ) : (
    <Container
      className={sectionContainer({ className, padding })}
      padding={padding === "horizontal" || padding === true}
      {...props}
    >
      {children}
    </Container>
  );

export const SectionDeck = ({
  className,
  size,
  ...props
}: SectionDeckProps) => (
  <Deck className={sectionDeck({ className, size })} size={size} {...props} />
);

export const SectionHeader = (props: SectionHeaderProps) => (
  <header {...props} />
);

export const SectionHeading = ({
  className,
  ...props
}: SectionHeadingProps) => (
  <Heading className={cx("mt-4 md:w-3/4", className)} {...props} />
);

export const SectionKicker = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div className={cx("flex items-center gap-2", className)} {...props} />
);
