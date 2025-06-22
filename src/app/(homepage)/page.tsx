import {
  ContentType,
  EntityPersonRelationship,
  Logo,
  LogoColorScheme,
  Schedule,
  SoftwareType,
} from "@/constants";

import { HomepageTools } from "@/app/(homepage)/_sections/tools";

import { AmbientLight } from "@/satin/ambient";
import {
  FadeIn,
  FadeInBlurToTop,
  StaggerFadeInBlurToTop,
} from "@/satin/animation/fade-in";
import { Banner } from "@/satin/banner";
import { Button, ButtonTruncate } from "@/satin/button";
import {
  Card,
  CardGrid,
  CardGridImage,
  CardHeading,
  CardIcon,
  CardIconImage,
  CardParagraph,
  Cards,
} from "@/satin/card";
import { ChevronIcon } from "@/satin/icons/chevron";
import { Link } from "@/satin/link";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemLink,
  ListItemTitle,
} from "@/satin/list";
import {
  Indicator,
  Main,
  Section,
  SectionButtons,
  SectionContainer,
  SectionDeck,
  SectionHeader,
  SectionHeading,
  SectionKicker,
} from "@/satin/page";
import {
  Tabs,
  TabsButton,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/satin/tabs";
import { Heading, Kicker, MatchText } from "@/satin/typography";

import { api } from "@/server/api";
import { parseEmploymentsFromPersonEntities } from "@/server/utilities/employment";

import { formatYearRange } from "@/utilities/date";
import { createLogoPicker } from "@/utilities/logo";
import {
  formatLocationList,
  formatSoftwareName,
  formatSoftwareType,
} from "@/utilities/string";
import { paths } from "@/utilities/url";

type StackType = SoftwareType | typeof FEATURED;

const FEATURED = "featured" as const;

const STACK_TYPES: StackType[] = [
  FEATURED,
  SoftwareType.Language,
  SoftwareType.Runtime,
  SoftwareType.Framework,
  SoftwareType.StylingSolution,
  SoftwareType.ComponentLibrary,
  SoftwareType.StateManagement,
  SoftwareType.Library,
  SoftwareType.ContentManagementSystem,
  SoftwareType.Database,
  SoftwareType.VersionControl,
  SoftwareType.CICD,
  SoftwareType.TestingLibrary,
  SoftwareType.PackageManagement,
  SoftwareType.Tool,
  SoftwareType.Collaboration,
  SoftwareType.LargeLanguageModel,
];

const pickLogo = createLogoPicker({
  order: {
    colorScheme: [LogoColorScheme.Monochromatic],
    type: [Logo.Mark, Logo.MarkContained, Logo.Type],
  },
});

const Homepage = async () => {
  const [person, software] = await Promise.all([
    api.people.getByEnvironmentVariable(),
    api.software.getByEnvironmentVariable(),
  ]);

  if (!person || !software) return null;

  const employments = parseEmploymentsFromPersonEntities(person.entities);

  const technologies = await api.software.get({
    slugs: [
      ...software.data.home.technologies.featured,
      ...software.data.home.technologies.other,
    ],
  });

  const stack = new Map<StackType, typeof technologies>([[FEATURED, []]]);

  for (const technology of technologies) {
    if (!stack.has(technology.type)) stack.set(technology.type, []);
    stack.get(technology.type)?.push(technology);
    if (software.data.home.technologies.featured.includes(technology.slug))
      stack.get(FEATURED)?.push(technology);
  }

  return (
    <>
      <FadeIn asChild>
        <AmbientLight />
      </FadeIn>
      <Main padding="header">
        <Section>
          <SectionContainer className="sm:py-24">
            <Heading asChild>
              <h1>
                <StaggerFadeInBlurToTop>
                  {software.data.home.hero.heading}
                </StaggerFadeInBlurToTop>
              </h1>
            </Heading>
            <FadeInBlurToTop
              asChild
              className="mt-6 text-lg font-medium text-balance text-gray-400 sm:text-xl md:max-w-[70%]"
              delay={900}
            >
              <p>
                <MatchText className="text-white" value={person.name}>
                  {software.data.home.hero.deck}
                </MatchText>
              </p>
            </FadeInBlurToTop>
            <SectionButtons align="start">
              <FadeInBlurToTop asChild delay={1000}>
                <Button asChild glow shine size="lg">
                  <Link href="#get-in-touch">
                    <ButtonTruncate>Get in touch</ButtonTruncate>
                  </Link>
                </Button>
              </FadeInBlurToTop>
              <FadeInBlurToTop asChild delay={1200}>
                <Button asChild color="secondary" size="lg" variant="text">
                  <Link href="#experience">
                    <ButtonTruncate className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
                      <span className="sr-only sm:not-sr-only">View my </span>
                      <span className="capitalize sm:normal-case">
                        experience
                      </span>
                    </ButtonTruncate>
                  </Link>
                </Button>
              </FadeInBlurToTop>
            </SectionButtons>
          </SectionContainer>
        </Section>
        <HomepageTools software={software} technologies={technologies} />
        {/* <Section className="bg-[linear-gradient(transparent,theme(colors.gray.900)_40%,theme(colors.gray.900)_60%,transparent)]"> */}
        <Section conic id="experience">
          <SectionContainer animated>
            <SectionHeader>
              <SectionKicker>
                <Indicator className="bg-[#4ea7fc]" />
                <Kicker>Experience</Kicker>
              </SectionKicker>
              <SectionHeading>Career paths and roles</SectionHeading>
              <SectionDeck>
                I have been fortunate to work with some{" "}
                <span className="text-white">
                  amazing companies and people.
                </span>
              </SectionDeck>
            </SectionHeader>
            <Cards className="mt-8 sm:mt-24">
              {employments.map((employment) => {
                const logo = pickLogo(
                  employment.entity.logos.map(({ logo }) => logo),
                );

                return (
                  <Card asChild clickable key={employment.id}>
                    <Link href={paths.entity(employment.entity.slug)}>
                      <CardGrid>
                        {logo && (
                          <CardGridImage
                            alt={employment.entity.name}
                            height={logo.height}
                            src={paths.api.logo(logo.id)}
                            unoptimized={logo.contentType === ContentType.Svg}
                            width={logo.width}
                          />
                        )}
                      </CardGrid>
                      <CardIcon>
                        {logo && (
                          <CardIconImage
                            alt={employment.entity.name}
                            height={logo.height}
                            src={paths.api.logo(logo.id)}
                            unoptimized={logo.contentType === ContentType.Svg}
                            width={logo.width}
                          />
                        )}
                      </CardIcon>
                      <CardHeading>
                        {employment.entity.name}
                        <br />
                        <span className="text-gray-500">
                          {employment.position}
                        </span>
                      </CardHeading>
                      <CardParagraph>
                        {[
                          formatYearRange({
                            from: employment.from,
                            to: employment.to ?? undefined,
                          }),
                          formatLocationList(employment.locations),
                        ]
                          .filter(Boolean)
                          .join(" • ")}
                      </CardParagraph>
                    </Link>
                  </Card>
                );
              })}
            </Cards>
          </SectionContainer>
        </Section>
        <Section conic id="education">
          <SectionContainer animated>
            <SectionHeader>
              <SectionKicker>
                <Indicator className="bg-[#68cc58]" />
                <Kicker>Education</Kicker>
              </SectionKicker>
              <SectionHeading>
                Academic timeline and achievements
              </SectionHeading>
              <SectionDeck>
                My educational journey has shaped{" "}
                <span className="text-white">my skills and passions</span>.
              </SectionDeck>
            </SectionHeader>
            <Cards className="mt-8 mb-12 sm:mt-24 sm:mb-32">
              {person.entities
                .filter(
                  ({ relationship }) =>
                    relationship === EntityPersonRelationship.Student,
                )
                .toSorted((a, z) => z.from.localeCompare(a.from))
                .map((education) => {
                  const logo = pickLogo(
                    education.entity.logos.map(({ logo }) => logo),
                  );

                  return (
                    <Card key={education.id}>
                      <CardGrid>
                        {logo && (
                          <CardGridImage
                            alt={education.entity.name}
                            height={logo.height}
                            src={paths.api.logo(logo.id)}
                            unoptimized={logo.contentType === ContentType.Svg}
                            width={logo.width}
                          />
                        )}
                      </CardGrid>
                      <CardIcon>
                        {logo && (
                          <CardIconImage
                            alt={education.entity.name}
                            height={logo.height}
                            src={paths.api.logo(logo.id)}
                            unoptimized={logo.contentType === ContentType.Svg}
                            width={logo.width}
                          />
                        )}
                      </CardIcon>
                      <CardHeading>{education.entity.name}</CardHeading>
                      <CardParagraph className="min-h-10 content-end text-balance">
                        {education.position}
                      </CardParagraph>
                      <CardParagraph>
                        {[
                          formatYearRange({
                            from: education.from,
                            to: education.to ?? undefined,
                          }),
                          formatLocationList(education.locations),
                        ]
                          .filter((value) => typeof value !== "undefined")
                          .join(" • ")}
                      </CardParagraph>
                    </Card>
                  );
                })}
            </Cards>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2">
              {software.data.home.education.map((entry, index) => (
                <div
                  className="border-b border-gray-900 py-10 first:border-y odd:pr-14 even:border-l md:py-14 md:even:pl-14 md:nth-[2]:border-y"
                  key={index}
                >
                  <h3 className="text-lg/snug font-medium tracking-tight">
                    {entry.heading}
                  </h3>
                  <p className="mt-1 text-gray-400">{entry.deck}</p>
                  <Button
                    asChild
                    className="mt-6 inline-block"
                    color="secondary"
                  >
                    <Link href={paths[entry.type](entry.slug)}>Learn more</Link>
                  </Button>
                </div>
              ))}
            </div>
          </SectionContainer>
        </Section>
        <Section conic id="projects">
          <SectionContainer animated>
            <SectionHeader>
              <SectionKicker>
                <Indicator className="bg-[#b59aff]" />
                <Kicker>Projects</Kicker>
              </SectionKicker>
              <SectionHeading>Showcasing my work</SectionHeading>
              <SectionDeck>
                A selection of personal and professional projects{" "}
                <span className="text-white">
                  I developed or contributed to
                </span>
                .
              </SectionDeck>
            </SectionHeader>
            <Cards className="mt-8 sm:mt-24">
              {person.software
                .toSorted((a, z) =>
                  a.software.name.localeCompare(z.software.name),
                )
                .map(({ software }) => {
                  const logo = pickLogo(software.logos.map(({ logo }) => logo));
                  const name = formatSoftwareName(software);

                  return (
                    <Card asChild clickable key={software.id}>
                      <Link href={paths.software(software.slug)}>
                        <CardGrid>
                          {logo && (
                            <CardGridImage
                              alt={name}
                              height={logo.height}
                              src={paths.api.logo(logo.id)}
                              unoptimized={logo.contentType === ContentType.Svg}
                              width={logo.width}
                            />
                          )}
                        </CardGrid>
                        <CardIcon>
                          {logo && (
                            <CardIconImage
                              alt={name}
                              height={logo.height}
                              src={paths.api.logo(logo.id)}
                              unoptimized={logo.contentType === ContentType.Svg}
                              width={logo.width}
                            />
                          )}
                        </CardIcon>
                        <CardHeading>{name}</CardHeading>
                        {software.caption && (
                          <CardParagraph>{software.caption}</CardParagraph>
                        )}
                      </Link>
                    </Card>
                  );
                })}
            </Cards>
          </SectionContainer>
        </Section>
        <Section conic id="stack">
          <SectionContainer animated>
            <SectionHeader>
              <SectionKicker>
                <Indicator className="border border-gray-600" />
                <Kicker>Stack</Kicker>
              </SectionKicker>
              <SectionHeading className="max-w-1/2">
                Leveraging modern tools
              </SectionHeading>
              <SectionDeck>
                The technologies I work with to{" "}
                <span className="text-white">
                  solve problems and build products
                </span>
                .
              </SectionDeck>
            </SectionHeader>
            <Tabs defaultValue="featured">
              <TabsList className="mt-8 mb-8 flex max-w-full items-center gap-3 overflow-x-auto [mask-image:linear-gradient(90deg,#0000,#fff_0.5rem,#fff_calc(100%-0.5rem),#0000)] p-2 [scrollbar-width:none] sm:mt-16 sm:flex-wrap sm:justify-center">
                {STACK_TYPES.map((stackType) => (
                  <TabsTrigger asChild key={stackType} value={stackType}>
                    <TabsButton
                      active={{ color: "primary", variant: "contained" }}
                      className="whitespace-nowrap"
                      color="secondary"
                      rounded
                      scale={false}
                      value={stackType}
                      variant="outlined"
                    >
                      {stackType === "featured"
                        ? "Featured"
                        : formatSoftwareType(stackType)}
                    </TabsButton>
                  </TabsTrigger>
                ))}
              </TabsList>
              {STACK_TYPES.map((stackType) => (
                <TabsContent key={stackType} value={stackType}>
                  <List className="grid-cols-[auto_1fr_auto]">
                    {stack
                      .get(stackType)
                      ?.toSorted((a, z) => a.name.localeCompare(z.name))
                      .map((software) => {
                        const logo = pickLogo(
                          software.logos.map(({ logo }) => logo),
                        );

                        return (
                          <ListItem key={software.id}>
                            <ListItemLink href={paths.software(software.slug)}>
                              <div>
                                {logo && (
                                  <ListItemIcon
                                    alt={software.name}
                                    height={logo.height}
                                    src={paths.api.logo(logo.id)}
                                    unoptimized={
                                      logo.contentType === ContentType.Svg
                                    }
                                    width={logo.width}
                                  />
                                )}
                              </div>
                              <ListItemTitle>{software.name}</ListItemTitle>
                              <div className="flex items-center gap-1.5 text-white">
                                {/* <p>Learn more</p> */}
                                <ChevronIcon className="size-4 rotate-90" />
                              </div>
                            </ListItemLink>
                          </ListItem>
                        );
                      })}
                  </List>
                </TabsContent>
              ))}
            </Tabs>
          </SectionContainer>
        </Section>
      </Main>
    </>
  );
};

export default Homepage;
