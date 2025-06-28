import { Fragment } from "react";

import { notFound } from "next/navigation";

import {
  Access,
  EntityPersonRelationship,
  Logo,
  LogoColorScheme,
} from "@/constants";
import { format } from "date-fns";

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
  DescriptionDetails,
  DescriptionItem,
  DescriptionList,
  DescriptionTerm,
} from "@/satin/description-list";
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
import { Link } from "@/satin/link";
import { Mdx } from "@/satin/mdx";
import {
  Main,
  Section,
  SectionContainer,
  SectionDeck,
  SectionHeader,
  SectionHeading,
} from "@/satin/page";

import type { api } from "@/server/api";

import { createLogoPicker } from "@/utilities/logo";
import {
  formatLocationList,
  formatSchedule,
  formatSoftwareName,
} from "@/utilities/string";
import { paths } from "@/utilities/url";

export type EntityPageProps = {
  entity: NonNullable<Awaited<ReturnType<typeof api.entity.getBySlug>>>;
};

const pickLogo = createLogoPicker({
  order: {
    colorScheme: [LogoColorScheme.Monochromatic],
    type: [Logo.Mark, Logo.MarkContained, Logo.Type],
  },
});

export const EntityPage = ({ entity }: EntityPageProps) => {
  const entries = entity.people.filter(
    ({ person, relationship }) =>
      person.slug === environment.PERSON_SLUG &&
      relationship !== EntityPersonRelationship.Student,
  );

  if (!entries.length) notFound();

  const contents = entries
    .map(({ content }) => content)
    .filter(Boolean)
    .join("\n---\n");

  const schedule = [
    ...new Set(
      entries
        .map(({ schedule }) => schedule && formatSchedule(schedule))
        .filter(Boolean),
    ),
  ].join(", ");

  const from = format(entries[0]!.from, "y");

  const links = entity.links
    ? Object.groupBy(entity.links, (link) => link.type)
    : undefined;

  const link = links?.website?.[0] ?? links?.source?.[0];

  const locations = [
    ...new Set(
      entries.flatMap(({ locations }) => formatLocationList(locations)),
    ),
  ];

  if (locations.some((location) => location.includes("(Hybrid)"))) {
    const remoteIndex = locations.indexOf("Remote");
    if (remoteIndex !== -1) locations.splice(remoteIndex, 1);
  }

  const location = locations.map((value, index) => (
    <Fragment key={index}>
      {Boolean(index) && <br />}
      {value}
    </Fragment>
  ));

  const logo = pickLogo(entity.logos.map(({ logo }) => logo));

  const position = [
    ...new Set(entries.map((employment) => employment.position)),
  ].join(", ");

  const projects = entity.software
    .filter((software) =>
      software.people.some(
        ({ person }) => person.slug === environment.PERSON_SLUG,
      ),
    )
    .sort((a, z) => formatSoftwareName(a).localeCompare(formatSoftwareName(z)));

  const lastEntry = entries.at(-1);
  const to = lastEntry?.to ? format(lastEntry.to, "y") : undefined;

  return (
    <Main padding="header">
      <IconHero>
        <article>
          <IconHeroGrid>
            {logo && (
              <IconHeroIcon>
                <IconHeroIconLogo alt={entity.name} logo={logo} />
              </IconHeroIcon>
            )}
          </IconHeroGrid>
          <IconHeroContent>
            <IconHeroHeading>{entity.name}</IconHeroHeading>
            {entity.caption && <IconHeroDeck>{entity.caption}</IconHeroDeck>}
            {link && link.access === Access.Public && (
              <IconHeroButtons>
                <Button asChild glow shine size="lg">
                  <Link href={link.url} target="_blank">
                    <ButtonTruncate>Visit site</ButtonTruncate>
                    <ArrowDiagonalIcon />
                  </Link>
                </Button>
              </IconHeroButtons>
            )}
            <FadeInBlurToTop asChild delay={1200}>
              <DescriptionList
                border
                className="xs:grid-cols-2 grid grid-cols-1 lg:flex"
                margin
                size="lg"
              >
                <DescriptionItem>
                  <DescriptionTerm>Position</DescriptionTerm>
                  <DescriptionDetails>{position}</DescriptionDetails>
                </DescriptionItem>
                {schedule && (
                  <DescriptionItem>
                    <DescriptionTerm>Employment type</DescriptionTerm>
                    <DescriptionDetails>{schedule}</DescriptionDetails>
                  </DescriptionItem>
                )}
                <DescriptionItem>
                  <DescriptionTerm>Duration</DescriptionTerm>
                  <DescriptionDetails>
                    {from}
                    {from !== to && (
                      <>
                        &ndash;
                        {to ?? "present"}
                      </>
                    )}
                  </DescriptionDetails>
                </DescriptionItem>
                <DescriptionItem>
                  <DescriptionTerm>Location</DescriptionTerm>
                  <DescriptionDetails>{location}</DescriptionDetails>
                </DescriptionItem>
              </DescriptionList>
            </FadeInBlurToTop>
            <FadeInBlurToTop asChild delay={2000}>
              <Article asChild>
                <section>{<Mdx source={contents} />}</section>
              </Article>
            </FadeInBlurToTop>
          </IconHeroContent>
        </article>
      </IconHero>
      {projects.length > 0 && (
        <Section>
          <FadeInBlurToTop asChild delay={2000}>
            <SectionContainer>
              <SectionHeader>
                <SectionHeading level={3}>My contributions</SectionHeading>
                <SectionDeck size="md">
                  Explore the projects I developed and contributed to during my
                  time at <span className="text-white">{entity.name}</span>.
                </SectionDeck>
              </SectionHeader>
              <Cards className="mt-6 sm:mt-12">
                {projects.map((software) => {
                  const logo = pickLogo(software.logos.map(({ logo }) => logo));
                  const name = formatSoftwareName(software);

                  return (
                    <Card asChild clickable key={software.id}>
                      <Link href={paths.software(software.slug)}>
                        <CardGrid>
                          {logo && <CardGridLogo logo={logo} />}
                        </CardGrid>
                        <CardIcon>
                          {logo && <CardIconLogo logo={logo} />}
                        </CardIcon>
                        <CardHeading>{name}</CardHeading>
                        {software.caption && (
                          <CardParagraph className="mt-auto text-balance">
                            {software.caption}
                          </CardParagraph>
                        )}
                      </Link>
                    </Card>
                  );
                })}
              </Cards>
            </SectionContainer>
          </FadeInBlurToTop>
        </Section>
      )}
    </Main>
  );
};
