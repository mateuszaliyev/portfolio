import { LinkType, Logo, LogoColorScheme, SoftwareType } from "@/constants";

import { environment } from "@/environment";

import { FadeInBlurToTop } from "@/satin/animation/fade-in";
import { Article } from "@/satin/article";
import { Button, ButtonTruncate } from "@/satin/button";
import {
  Card,
  CardGrid,
  CardGridLogo,
  CardHeading,
  CardIcon,
  CardIconLogo,
  CardParagraph,
  Cards,
} from "@/satin/card";
import {
  IconHero,
  IconHeroButtons,
  IconHeroContent,
  IconHeroDeck,
  IconHeroGrid,
  IconHeroHeading,
  IconHeroIcon,
  IconHeroIconLogo,
} from "@/satin/hero/icon";
import { ArrowDiagonalIcon } from "@/satin/icons/arrow";
import { ChevronIcon } from "@/satin/icons/chevron";
import { GitBranchIcon } from "@/satin/icons/git";
import { Link } from "@/satin/link";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemIconLogo,
  ListItemLink,
  ListItemTitle,
} from "@/satin/list";
import { Mdx } from "@/satin/mdx";
import {
  Main,
  Section,
  SectionButtons,
  SectionContainer,
  SectionDeck,
  SectionHeader,
  SectionHeading,
} from "@/satin/page";

import type { api } from "@/server/api";

import { compareAccess, isAccessible } from "@/utilities/access";
import { createLogoPicker } from "@/utilities/logo";
import { formatSoftwareName } from "@/utilities/string";
import { paths } from "@/utilities/url";

export type SoftwarePageProps = {
  software: NonNullable<Awaited<ReturnType<typeof api.software.getBySlug>>>;
};

const pickLogo = createLogoPicker({
  order: {
    colorScheme: [LogoColorScheme.Monochromatic],
    type: [Logo.Mark, Logo.MarkContained, Logo.Type],
  },
});

export const SoftwarePage = ({ software }: SoftwarePageProps) => {
  const content =
    software.people.find(
      ({ person }) => person.slug === environment.PERSON_SLUG,
    )?.content ?? software.content;

  const links = software.links
    ? Object.groupBy(software.links, (link) => link.type)
    : undefined;

  const link =
    links?.website?.toSorted((a, z) => compareAccess(a.access, z.access))[0] ??
    links?.source?.toSorted((a, z) => compareAccess(a.access, z.access))[0];

  const logo = pickLogo(software.logos.map(({ logo }) => logo));

  const name = formatSoftwareName(software);

  const projects =
    software.type !== SoftwareType.Application
      ? software.dependents
          .filter(({ dependent }) =>
            dependent.people.some(
              ({ person }) => person.slug === environment.PERSON_SLUG,
            ),
          )
          .sort((a, z) =>
            formatSoftwareName(a.dependent).localeCompare(
              formatSoftwareName(z.dependent),
            ),
          )
      : undefined;

  const source = software.links?.filter(
    (link) => isAccessible(link.access) && link.type === LinkType.Source,
  );

  return (
    <Main padding="header">
      <IconHero>
        <article>
          <IconHeroGrid>
            {logo && (
              <IconHeroIcon>
                <IconHeroIconLogo alt={name} logo={logo} />
              </IconHeroIcon>
            )}
          </IconHeroGrid>
          <IconHeroContent>
            <IconHeroHeading>{name}</IconHeroHeading>
            {software.caption && (
              <IconHeroDeck>{software.caption}</IconHeroDeck>
            )}
            {((link && isAccessible(link.access)) || software.entity) && (
              <IconHeroButtons>
                {link && isAccessible(link.access) && (
                  <Button asChild glow shine size="lg">
                    <Link href={link.url} target="_blank">
                      <ButtonTruncate>Visit site</ButtonTruncate>
                      <ArrowDiagonalIcon />
                    </Link>
                  </Button>
                )}
                {software.entity && (
                  <Button asChild size="lg" variant="text">
                    <Link href={paths.software(software.entity.slug)}>
                      <ButtonTruncate className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
                        {software.entity.name}
                      </ButtonTruncate>
                    </Link>
                  </Button>
                )}
              </IconHeroButtons>
            )}
            {content && (
              <FadeInBlurToTop asChild delay={2000}>
                <Article asChild>
                  <section>
                    <Mdx source={content} />
                  </section>
                </Article>
              </FadeInBlurToTop>
            )}
          </IconHeroContent>
        </article>
      </IconHero>
      {projects && projects.length > 0 && (
        <Section>
          <FadeInBlurToTop asChild delay={2000}>
            <SectionContainer>
              <SectionHeader>
                <SectionHeading level={3}>Projects</SectionHeading>
                <SectionDeck size="md">
                  Explore projects I developed or contributed to that take
                  advantage of <span className="text-white">{name}</span>.
                </SectionDeck>
              </SectionHeader>
              <Cards className="mt-6 sm:mt-12">
                {projects.map(({ dependent }) => {
                  const { position } = dependent.people.find(
                    ({ person }) => person.slug === environment.PERSON_SLUG,
                  )!;

                  const logo = pickLogo(
                    dependent.logos.map(({ logo }) => logo),
                  );

                  const name = formatSoftwareName(dependent);

                  return (
                    <Card asChild clickable key={dependent.id}>
                      <Link href={paths.software(dependent.slug)}>
                        <CardGrid>
                          {logo && <CardGridLogo logo={logo} />}
                        </CardGrid>
                        <CardIcon>
                          {logo && <CardIconLogo logo={logo} />}
                        </CardIcon>
                        <CardHeading>{name}</CardHeading>
                        {dependent.caption && (
                          <CardParagraph className="mt-auto text-balance">
                            {dependent.caption}
                          </CardParagraph>
                        )}
                        <CardParagraph
                          className={[
                            "text-balance",
                            !dependent.caption && "mt-auto",
                          ]}
                        >
                          {[position, dependent.entity?.name]
                            .filter(Boolean)
                            .join(" • ")}
                        </CardParagraph>
                      </Link>
                    </Card>
                  );
                })}
              </Cards>
            </SectionContainer>
          </FadeInBlurToTop>
        </Section>
      )}
      {software.dependencies.length > 0 && (
        <Section>
          <FadeInBlurToTop asChild delay={2000}>
            <SectionContainer>
              <SectionHeader>
                <SectionHeading level={3}>
                  {software.type === SoftwareType.Application
                    ? "Technology stack"
                    : "Dependencies"}
                </SectionHeading>
                <SectionDeck size="md">
                  Explore the core technologies and essential tools powering{" "}
                  <span className="text-white">{name}</span>.
                </SectionDeck>
                {source && source.length > 0 && (
                  <SectionButtons align="start" margin="sm">
                    {source.map((link, index) => (
                      <Button asChild color="secondary" key={index}>
                        <Link href={link.url} target="_blank">
                          <GitBranchIcon />
                          <ButtonTruncate>
                            {link.description || "View source"}
                          </ButtonTruncate>
                          <ArrowDiagonalIcon />
                        </Link>
                      </Button>
                    ))}
                  </SectionButtons>
                )}
              </SectionHeader>
              <List className="mt-8 grid-cols-[auto_1fr_auto]">
                {software.dependencies
                  .toSorted((a, z) =>
                    formatSoftwareName(a.dependency).localeCompare(
                      formatSoftwareName(z.dependency),
                    ),
                  )
                  .map(({ dependency }) => {
                    const logo = pickLogo(
                      dependency.logos.map(({ logo }) => logo),
                    );

                    const name = formatSoftwareName(dependency);

                    return (
                      <ListItem key={dependency.id}>
                        <ListItemLink href={paths.software(dependency.slug)}>
                          <ListItemIcon>
                            {logo && <ListItemIconLogo logo={logo} />}
                          </ListItemIcon>
                          <ListItemTitle>{name}</ListItemTitle>
                          <div className="flex items-center gap-1.5 text-white">
                            {/* <p>Learn more</p> */}
                            <ChevronIcon className="size-4 rotate-90" />
                          </div>
                        </ListItemLink>
                      </ListItem>
                    );
                  })}
              </List>
            </SectionContainer>
          </FadeInBlurToTop>
        </Section>
      )}
    </Main>
  );
};
