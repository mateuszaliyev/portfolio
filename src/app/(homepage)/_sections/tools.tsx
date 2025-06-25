import { ContentType, Logo, LogoColorScheme } from "@/constants";

import { FadeInBlurToTop } from "@/satin/animation/fade-in";
import { Button } from "@/satin/button";
import { Image } from "@/satin/image";
import { Link } from "@/satin/link";
import { Marquee, MarqueeContent, MarqueeItem } from "@/satin/marquee";
import { Section, SectionContainer } from "@/satin/page";

import type {
  SoftwareGetByEnvironmentVariableReturnType,
  SoftwareGetReturnType,
} from "@/server/api/software";

import { createLogoPicker } from "@/utilities/logo";
import { paths } from "@/utilities/url";

type FeaturedTechnology = HomepageToolsProps["technologies"][number] & {
  logo: HomepageToolsProps["technologies"][number]["logos"][number]["logo"];
};

type HomepageToolsProps = {
  software: NonNullable<SoftwareGetByEnvironmentVariableReturnType>;
  technologies: SoftwareGetReturnType;
};

const pickLogo = createLogoPicker({
  order: {
    colorScheme: [LogoColorScheme.Monochromatic],
    type: [Logo.Lockup, Logo.Type],
  },
});

export const HomepageTools = ({
  software,
  technologies,
}: HomepageToolsProps) => {
  let featured: FeaturedTechnology[] = [];

  for (const technology of technologies) {
    if (!software.data.home.technologies.featured.includes(technology.slug)) {
      continue;
    }

    const logo = pickLogo(technology.logos.map(({ logo }) => logo));

    if (logo) featured.push({ ...technology, logo });
  }

  featured = featured
    .sort(
      (a, z) =>
        software.data.home.technologies.featured.indexOf(a.slug) -
        software.data.home.technologies.featured.indexOf(z.slug),
    )
    .slice(0, 6);

  return (
    <Section>
      <SectionContainer>
        <FadeInBlurToTop asChild delay={2000}>
          <p className="mx-auto max-w-xl text-center font-medium tracking-tight text-balance text-gray-400 md:text-xl">
            <span className="md:text-white">
              Crafting fast and reliable web applications.
            </span>{" "}
            Leveraging modern tools for seamless development.
          </p>
        </FadeInBlurToTop>
        <FadeInBlurToTop asChild delay={2200}>
          <Link className="group relative mt-8 hidden md:block" href="#stack">
            <div className="group-hocus-visible:blur-sm transition">
              <div className="grid grid-cols-3 gap-x-6 gap-y-12">
                {featured.map((technology) => (
                  <div
                    className="flex aspect-[4/1] items-center justify-center brightness-0 invert"
                    key={technology.id}
                  >
                    <Image
                      alt={technology.name}
                      className="h-7 w-auto"
                      height={technology.logo.height}
                      priority
                      src={paths.api.logo(technology.logo.id)}
                      unoptimized={
                        technology.logo.contentType === ContentType.Svg
                      }
                      width={technology.logo.width}
                    />
                  </div>
                ))}
              </div>
            </div>
            <Button
              className="group-hocus-visible:opacity-100 group-hocus-visible:pointer-events-auto pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
              color="secondary"
            >
              See my stack
            </Button>
          </Link>
        </FadeInBlurToTop>
      </SectionContainer>
      <FadeInBlurToTop
        className="mb-24 mask-x-from-95% mask-x-to-99% md:hidden"
        delay={2200}
      >
        <Link className="block" href="#stack">
          <Marquee>
            <MarqueeContent className="[animation-duration:20s]">
              {featured.map((technology) => (
                <MarqueeItem
                  className="brightness-0 invert"
                  key={technology.id}
                >
                  <Image
                    alt={technology.name}
                    className="h-5 w-auto"
                    height={technology.logo.height}
                    priority
                    src={paths.api.logo(technology.logo.id)}
                    unoptimized={
                      technology.logo.contentType === ContentType.Svg
                    }
                    width={technology.logo.width}
                  />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        </Link>
      </FadeInBlurToTop>
    </Section>
  );
};
