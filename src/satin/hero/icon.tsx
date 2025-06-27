import {
  FadeIn,
  FadeInBlurToTop,
  FadeInScaleDown,
} from "@/satin/animation/fade-in";
import { cx } from "@/satin/classname";
import { Container, type ContainerProps } from "@/satin/container";
import { Image, type ImageProps } from "@/satin/image";
import {
  SectionButtons,
  SectionDeck,
  SectionHeading,
  type SectionButtonsProps,
  type SectionDeckProps,
  type SectionHeadingProps,
  type SectionProps,
} from "@/satin/page";

import type { Logo } from "@/server/database/schema";

import { logoImageProps } from "@/utilities/logo";

export { Section as IconHero } from "@/satin/page";

export type IconHeroProps = SectionProps;

export type IconHeroContentProps = Omit<ContainerProps, "padding" | "size">;

export type IconHeroGridProps = Omit<ContainerProps, "padding" | "size">;

export type IconHeroIconImageProps = ImageProps;

export interface IconHeroIconLogoProps
  extends Omit<IconHeroIconImageProps, "src">,
    Partial<Pick<IconHeroIconImageProps, "src">> {
  logo: Logo;
}

export const IconHeroButtons = (props: SectionButtonsProps) => (
  <FadeInBlurToTop asChild delay={1100}>
    <SectionButtons {...props} />
  </FadeInBlurToTop>
);

export const IconHeroContent = ({
  className,
  ...props
}: IconHeroContentProps) => (
  <Container
    className={["relative -mt-12 text-center", className]}
    {...props}
  />
);

export const IconHeroDeck = ({ className, ...props }: SectionDeckProps) => (
  <FadeInBlurToTop asChild className={["mx-auto", className]} delay={1000}>
    <SectionDeck {...props} />
  </FadeInBlurToTop>
);

export const IconHeroGrid = ({
  children,
  className,
  ...props
}: IconHeroGridProps) => (
  <Container
    className={[
      "pointer-events-none flex justify-center overflow-x-hidden select-none",
      className,
    ]}
    padding={false}
    {...props}
  >
    <div className="relative aspect-1024/376 w-256 shrink-0 [mask-image:radial-gradient(53%_90%_at_50%_50%,theme(color.gray.950)_20%,transparent_70%)]">
      <FadeIn asChild delay={200}>
        <svg
          fill="none"
          stroke="#fff"
          strokeOpacity={0.15}
          viewBox="0 0 1024 376"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1322 247.5H-299" />
          <path strokeDasharray="5 5" d="M1322 306.5H-299" />
          <path strokeDasharray="5 5" d="M1322 365.5H-299" />
          <path strokeDasharray="5 5" d="M1322 188.5H-299" />
          <path d="M1322 128.5H-299" />
          <path strokeDasharray="5 5" d="M1322 69.5H-299" />
          <path strokeDasharray="5 5" d="M1322 10.5H-299" />
          <path d="M571.5 0v376" />
          <path strokeDasharray="5 5" d="M630.5 0v376" />
          <path strokeDasharray="5 5" d="M689.5 0v376" />
          <path strokeDasharray="5 5" d="M748.5 0v376" />
          <path strokeDasharray="5 5" d="M807.5 0v376" />
          <path strokeDasharray="5 5" d="M512.5 0v376" />
          <path d="M452.5 0v376" />
          <path strokeDasharray="5 5" d="M393.5 0v376" />
          <path strokeDasharray="5 5" d="M334.5 0v376" />
          <path strokeDasharray="5 5" d="M275.5 0v376" />
          <path strokeDasharray="5 5" d="M216.5 0v376" />
        </svg>
      </FadeIn>
      {children}
    </div>
  </Container>
);

export const IconHeroHeading = ({
  asChild,
  children,
  className,
  ...props
}: SectionHeadingProps) => (
  <FadeInBlurToTop asChild className={["mx-auto", className]} delay={900}>
    <SectionHeading asChild={asChild ?? true} {...props}>
      {typeof asChild === "undefined" ? <h1>{children}</h1> : children}
    </SectionHeading>
  </FadeInBlurToTop>
);

export const IconHeroIcon = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <FadeInScaleDown asChild delay={800}>
    <div
      className={cx(
        "absolute top-1/2 left-1/2 flex size-30 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-gray-700 bg-gray-950 p-5",
        className,
      )}
      {...props}
    />
  </FadeInScaleDown>
);

export const IconHeroIconImage = ({
  alt,
  className,
  priority = true,
  ...props
}: IconHeroIconImageProps) => (
  <Image
    alt={alt}
    className={cx("brightness-0 invert", className)}
    priority={priority}
    {...props}
  />
);

export const IconHeroIconLogo = ({
  logo,
  style = {},
  ...props
}: IconHeroIconLogoProps) => (
  <IconHeroIconImage
    style={
      logo.height <= logo.width
        ? { height: "auto", width: "100%", ...style }
        : { height: "100%", width: "auto", ...style }
    }
    {...logoImageProps(logo)}
    {...props}
  />
);
