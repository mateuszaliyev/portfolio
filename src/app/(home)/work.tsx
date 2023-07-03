import type { ReactNode } from "react";

import { cx } from "cva";

import { Badge } from "@/components/badge";
import { Balancer } from "@/components/balancer";
import { ChopTheBillLogomarkBackground } from "@/components/chopthebill/logomark-background";
import { Container } from "@/components/container";
import { Headline } from "@/components/headline";
import { GitHubIcon } from "@/components/icons/github";
import { Link, type LinkProps } from "@/components/link";
import { LinkExternalIcon } from "@/components/link/external-icon";
import { Logo } from "@/components/logo";
import { SkniKodLogomark } from "@/components/skni-kod/logomark";
import { SpaceTagLogomark } from "@/components/spacetag/logomark";
import { TokiLogomark } from "@/components/toki/logomark";

import { environment } from "@/environment.mjs";

type WorkProjectProps<Route> = {
  badge?: ReactNode;
  children: ReactNode;
  className?: string;
  href: LinkProps<Route>["href"];
  linkClassName?: string;
  logo: ReactNode;
  title: string;
};

const WorkProject = <Route,>({
  badge,
  children,
  className,
  href,
  linkClassName,
  logo,
  title,
}: WorkProjectProps<Route>) => {
  const external = typeof href === "string" && href.startsWith("https");

  return (
    <li className={className}>
      <Link
        className={cx(
          "gradient-to-b flex w-full flex-col rounded-md border border-gray-200 from-white to-gray-50 to-65% p-6 shadow-inner outline-none transition md:min-h-[14rem]",
          linkClassName
        )}
        href={href}
        target={external ? "_blank" : undefined}
      >
        <div aria-hidden className="mb-8 flex h-10 items-start justify-between">
          <div className="h-full w-10">{logo}</div>
          {badge}
        </div>
        <h3 className="mt-auto text-2xl">
          {title}
          {external && <LinkExternalIcon />}
        </h3>
        <p className="pt-1 text-gray-500">
          <Balancer>{children}</Balancer>
        </p>
      </Link>
    </li>
  );
};

export const Work = () => (
  <section className="bg-white py-20" id="work">
    <Container>
      <Headline className="text-center">Recent work</Headline>
      <ul className="flex flex-col flex-wrap justify-center gap-4 pt-20 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <WorkProject
          badge={<Badge color="emerald">New</Badge>}
          href="/projects/portfolio"
          linkClassName="hover:border-sky-500 focus-visible:border-sky-500"
          logo={
            <Logo
              className="h-full w-full"
              stroke="url(#gradient-cyan-sky-blue)"
            />
          }
          title="mata.li"
        >
          My personal portfolio.
        </WorkProject>
        <WorkProject
          href="/projects/toki"
          linkClassName="hover:border-gray-950 focus-visible:border-gray-950"
          logo={<TokiLogomark className="h-full w-full text-gray-950" />}
          title="Toki"
        >
          Minimalist count up timer.
        </WorkProject>
        <WorkProject
          badge={<Badge color="blue">Work in Progress</Badge>}
          href="/projects/skni-kod"
          linkClassName="hover:border-sky-500 focus-visible:border-sky-500"
          logo={
            <SkniKodLogomark
              className="h-full w-full"
              fill="url(#gradient-cyan-sky-blue)"
            />
          }
          title="SKNI Kod"
        >
          Student Research Group of Computer Science &mdash; ‘Code’ website.
        </WorkProject>
        <WorkProject
          href="/projects/spacetag"
          linkClassName="hover:border-black focus-visible:border-black"
          logo={<SpaceTagLogomark className="h-full w-full text-black" />}
          title="SpaceTag"
        >
          3D satellite tracking tool.
        </WorkProject>
        <WorkProject
          href="/projects/chopthebill"
          linkClassName="hover:border-emerald-500 focus-visible:border-emerald-500"
          logo={<ChopTheBillLogomarkBackground className="h-full w-full" />}
          title="ChopTheBill"
        >
          Cost sharing made easy.
        </WorkProject>
        <WorkProject
          href={`${environment.NEXT_PUBLIC_GITHUB_URL}?tab=repositories`}
          linkClassName="hover:border-gray-900 focus-visible:border-gray-900"
          logo={<GitHubIcon className="h-full w-full text-gray-900" />}
          title="More projects"
        >
          My GitHub repositories.
        </WorkProject>
      </ul>
    </Container>
  </section>
);
