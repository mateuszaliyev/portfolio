import type { HTMLAttributes, ReactNode } from "react";

import { cx } from "cva";

import { Balancer } from "@/components/balancer";
import { Container } from "@/components/container";
import { Headline } from "@/components/headline";
import { Link, type LinkProps } from "@/components/link";
import { LinkExternalIcon } from "@/components/link/external-icon";
import { LinkInline } from "@/components/link/inline";
import { TechnologyIcon } from "@/components/technology/icon";
import { TechnologyList } from "@/components/technology/list";

type TimelineEntryProps<Route> = {
  children: ReactNode;
  date: string;
  fadeLine?: boolean;
  title: {
    href?: LinkProps<Route>["href"];
    text: string;
  };
};

const TimelineContent = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cx(
      "max-w-prose pb-2 text-lg text-gray-500 sm:text-xl md:text-2xl",
      className
    )}
    {...props}
  >
    <Balancer>{children}</Balancer>
  </p>
);

const TimelineEntry = <Route,>({
  children,
  date,
  fadeLine,
  title,
}: TimelineEntryProps<Route>) => (
  <li className="relative flex gap-6 lg:gap-8">
    <div aria-hidden className="flex flex-col items-center">
      <div className="flex h-8 w-full items-center justify-center sm:h-9 md:h-10">
        <div className="h-[0.6875rem] w-[0.6875rem] rounded-full border-2 border-gray-400" />
      </div>
      <div
        className={cx(
          "w-px grow",
          fadeLine
            ? "bg-gradient-to-b from-gray-300 to-transparent"
            : "bg-gray-300"
        )}
      />
    </div>
    <div className="flex flex-col gap-2 pb-8 text-gray-400 sm:gap-3 sm:pb-10 md:gap-4 md:pb-12">
      <h3 className="text-2xl sm:text-3xl md:text-4xl">
        <Balancer>
          {title.href ? (
            <Link
              className="bg-gradient-to-b from-cyan-400 via-sky-500 to-blue-600 bg-clip-text text-current outline-none transition hover:text-transparent focus-visible:text-transparent"
              href={title.href}
              target={
                typeof title.href === "string" &&
                title.href.startsWith("https://")
                  ? "_blank"
                  : undefined
              }
            >
              {title.text}
              <LinkExternalIcon />
            </Link>
          ) : (
            title.text
          )}
        </Balancer>
      </h3>
      <p className="right-full flex items-center whitespace-nowrap text-sm sm:text-base xl:absolute xl:mr-8 xl:h-10">
        {date}
      </p>
      {children}
    </div>
  </li>
);

export const Timeline = () => (
  <section className="flex flex-col gap-16 bg-white">
    <Container>
      <Headline className="text-center">Timeline</Headline>
      <ul className="mx-auto w-full max-w-screen-md">
        <TimelineEntry
          date="2022"
          title={{
            href: "https://2022.spaceappschallenge.org/locations/rzeszow",
            text: "NASA Space Apps Challenge",
          }}
        >
          <TimelineContent>
            Third place in{" "}
            <LinkInline
              href="https://2022.spaceappschallenge.org/locations/rzeszow"
              target="_blank"
            >
              Subcarpathian NASA Space Apps Challenge
            </LinkInline>{" "}
            team competition for{" "}
            <LinkInline href="/projects/spacetag">SpaceTag</LinkInline> — a 3D
            satellite tracking web application awarded with a trip to{" "}
            <LinkInline href="https://ses.com/" target="_blank">
              SES
            </LinkInline>{" "}
            headquarters in Betzdorf, Luxembourg.
          </TimelineContent>
          <TechnologyList>
            <TechnologyIcon
              href="https://headlessui.com/"
              logo="headless-ui"
              name="Headless UI"
            />
            <TechnologyIcon
              href="https://nextjs.org/"
              logo="next-js"
              name="Next.js"
            />
            <TechnologyIcon href="https://pnpm.io/" logo="pnpm" name="pnpm" />
            <TechnologyIcon
              href="https://react.dev/"
              logo="react"
              name="React"
            />
            <TechnologyIcon
              href="https://tailwindcss.com/"
              logo="tailwindcss"
              name="Tailwind CSS"
            />
            <TechnologyIcon
              href="https://tanstack.com/query"
              logo="tanstack-query"
              name="TanStack Query"
            />
            <TechnologyIcon
              href="https://threejs.org/"
              logo="three-js"
              name="Three.js"
            />
            <TechnologyIcon href="https://trpc.io/" logo="trpc" name="tRPC" />
            <TechnologyIcon
              href="https://typescriptlang.org/"
              logo="typescript"
              name="TypeScript"
            />
            <TechnologyIcon
              href="https://vercel.com/"
              logo="vercel"
              name="Vercel"
            />
            <TechnologyIcon href="https://zod.dev/" logo="zod" name="Zod" />
            <TechnologyIcon
              href="https://zustand-demo.pmnd.rs/"
              logo="zustand"
              name="Zustand"
            />
          </TechnologyList>
        </TimelineEntry>
        <TimelineEntry
          date="2021–now"
          title={{
            href: "https://kod.prz.edu.pl/",
            text: "SKNI Kod",
          }}
        >
          <TimelineContent>
            Frontend developer at Student Research Group of Computer Science
            &mdash; ‘Code’. Mentor, leader of{" "}
            <LinkInline href="/projects/spacetag">
              one of the projects
            </LinkInline>{" "}
            and frequent contributor to group&apos;s open-source web projects.
          </TimelineContent>
          <TechnologyList>
            <TechnologyIcon
              href="https://cva.style/"
              logo="class-variance-authority"
              name="Class Variance Authority"
            />
            <TechnologyIcon
              href="https://headlessui.com/"
              logo="headless-ui"
              name="Headless UI"
            />
            <TechnologyIcon href="https://mdxjs.com/" logo="mdx" name="MDX" />
            <TechnologyIcon
              href="https://mysql.com/"
              logo="mysql"
              name="MySQL"
            />
            <TechnologyIcon
              href="https://nextjs.org/"
              logo="next-js"
              name="Next.js"
            />
            <TechnologyIcon
              href="https://react.dev/"
              logo="react"
              name="React"
            />
            <TechnologyIcon
              href="https://planetscale.com/"
              logo="planetscale"
              name="PlanetScale"
            />
            <TechnologyIcon
              href="https://prisma.io/"
              logo="prisma"
              name="Prisma"
            />
            <TechnologyIcon
              href="https://sass-lang.com/"
              logo="sass"
              name="Sass"
            />
            <TechnologyIcon
              href="https://tailwindcss.com/"
              logo="tailwindcss"
              name="Tailwind CSS"
            />
            <TechnologyIcon
              href="https://tanstack.com/query"
              logo="tanstack-query"
              name="TanStack Query"
            />
            <TechnologyIcon href="https://trpc.io/" logo="trpc" name="tRPC" />
            <TechnologyIcon
              href="https://typescriptlang.org/"
              logo="typescript"
              name="TypeScript"
            />
            <TechnologyIcon
              href="https://vercel.com/"
              logo="vercel"
              name="Vercel"
            />
            <TechnologyIcon
              href="https://vuejs.org/"
              logo="vue-js"
              name="Vue.js"
            />
            <TechnologyIcon href="https://zod.dev/" logo="zod" name="Zod" />
          </TechnologyList>
        </TimelineEntry>
        <TimelineEntry
          date="2021–2022"
          title={{
            href: "https://ideosoftware.com/",
            text: "Ideo",
          }}
        >
          <TimelineContent>
            Frontend Developer employed after a month of internship maintaining
            an e-commerce application of one of the biggest retailers in Poland
            as well as implementing designs for internal projects.
          </TimelineContent>
          <TechnologyList>
            <TechnologyIcon
              href="https://w3.org/html"
              logo="html"
              name="HTML"
            />
            <TechnologyIcon
              href="https://w3.org/Style/CSS"
              logo="css"
              name="CSS"
            />
            <TechnologyIcon
              href="https://ecma-international.org/publications-and-standards/standards/ecma-262"
              logo="javascript"
              name="JavaScript"
            />
            <TechnologyIcon
              href="https://sass-lang.com/"
              logo="sass"
              name="Sass"
            />
            <TechnologyIcon
              href="https://typescriptlang.org/"
              logo="typescript"
              name="TypeScript"
            />
            <TechnologyIcon
              href="https://vuejs.org/"
              logo="vue-js"
              name="Vue.js"
            />
          </TechnologyList>
        </TimelineEntry>
        <TimelineEntry
          date="2021"
          title={{
            text: "Freelancing",
          }}
        >
          <TimelineContent>
            Web developer building client e-commerce website using modern
            frameworks and libraries in Jamstack architectural approach.
          </TimelineContent>
          <TechnologyList>
            <TechnologyIcon
              href="https://contentful.com/"
              logo="contentful"
              name="Contentful"
            />
            <TechnologyIcon
              href="https://nextjs.org/"
              logo="next-js"
              name="Next.js"
            />
            <TechnologyIcon
              href="https://nodemailer.com/"
              logo="nodemailer"
              name="Nodemailer"
            />
            <TechnologyIcon
              href="https://radix-ui.com/"
              logo="radix-ui"
              name="Radix UI"
            />
            <TechnologyIcon
              href="https://react.dev/"
              logo="react"
              name="React"
            />
            <TechnologyIcon
              href="https://stitches.dev/"
              logo="stitches"
              name="Stitches"
            />
            <TechnologyIcon
              href="https://typescriptlang.org/"
              logo="typescript"
              name="TypeScript"
            />
            <TechnologyIcon
              href="https://vercel.com/"
              logo="vercel"
              name="Vercel"
            />
          </TechnologyList>
        </TimelineEntry>
        <TimelineEntry
          date="2019–2023"
          title={{
            href: "https://w.prz.edu.pl/en/",
            text: "Rzeszow University of Technology",
          }}
        >
          <TimelineContent>
            Bachelor of Engineering in Computer Engineering, speciality
            Information Technology in Business, academic profile.
          </TimelineContent>
          <TechnologyList>
            <TechnologyIcon
              href="https://w3.org/html"
              logo="html"
              name="HTML"
            />
            <TechnologyIcon
              href="https://w3.org/Style/CSS"
              logo="css"
              name="CSS"
            />
            <TechnologyIcon
              href="https://ecma-international.org/publications-and-standards/standards/ecma-262"
              logo="javascript"
              name="JavaScript"
            />
            <TechnologyIcon
              href="https://mysql.com/"
              logo="mysql"
              name="MySQL"
            />
            <TechnologyIcon href="https://php.net/" logo="php" name="PHP" />
            <TechnologyIcon
              href="https://postgresql.org/"
              logo="postgresql"
              name="PostgreSQL"
            />
            <TechnologyIcon
              href="https://python.org/"
              logo="python"
              name="Python"
            />
          </TechnologyList>
        </TimelineEntry>
        <TimelineEntry
          date="2018"
          title={{
            href: "https://cinel.pt/",
            text: "CINEL",
          }}
        >
          <TimelineContent>
            Trainee designing and implementing websites during internship abroad
            at the CINEL training centre in Lisbon, Portugal as part of the{" "}
            <LinkInline href="https://power.gov.pl/" target="_blank">
              PO WER
            </LinkInline>{" "}
            operational programme.
          </TimelineContent>
          <TechnologyList>
            <TechnologyIcon
              href="https://w3.org/html"
              logo="html"
              name="HTML"
            />
            <TechnologyIcon
              href="https://w3.org/Style/CSS"
              logo="css"
              name="CSS"
            />
          </TechnologyList>
        </TimelineEntry>
        <TimelineEntry
          date="2015–2019"
          fadeLine
          title={{
            href: "https://www.elektronik.rzeszow.pl/en/",
            text: "Technical School of Electronics in Rzeszow",
          }}
        >
          <TimelineContent>IT Technician.</TimelineContent>
          <TechnologyList>
            <TechnologyIcon
              href="https://w3.org/html"
              logo="html"
              name="HTML"
            />
            <TechnologyIcon
              href="https://w3.org/Style/CSS"
              logo="css"
              name="CSS"
            />
            <TechnologyIcon
              href="https://ecma-international.org/publications-and-standards/standards/ecma-262"
              logo="javascript"
              name="JavaScript"
            />
            <TechnologyIcon
              href="https://mysql.com/"
              logo="mysql"
              name="MySQL"
            />
            <TechnologyIcon href="https://php.net/" logo="php" name="PHP" />
          </TechnologyList>
        </TimelineEntry>
      </ul>
    </Container>
  </section>
);
