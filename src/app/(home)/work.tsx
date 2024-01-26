import type { ReactNode } from "react";

import fabrykaKreatywnosci from "@/assets/images/fabryka-kreatywnosci.png";

import { Balancer } from "@/components/balancer";
import { ChopTheBillLogomarkBackground } from "@/components/chopthebill/logomark-background";
import { Container } from "@/components/container";
import { Headline } from "@/components/headline";
import { GitHubIcon } from "@/components/icons/github";
import { Image } from "@/components/image";
import { Link, type LinkProps } from "@/components/link";
import { LinkExternalIcon } from "@/components/link/external-icon";
import { Logo } from "@/components/logo";
import { SpaceTagLogomark } from "@/components/spacetag/logomark";
import { TokiLogomark } from "@/components/toki/logomark";

import { cx } from "@/utilities/classname";
import { isExternal } from "@/utilities/url";

type SelectedWorkProjectProps = {
  badge?: ReactNode;
  children: ReactNode;
  className?: string;
  href: LinkProps["href"];
  logo: ReactNode;
  title: string;
};

const SelectedWorkProject = ({
  badge,
  children,
  className,
  href,
  logo,
  title,
}: SelectedWorkProjectProps) => {
  const external = typeof href === "string" && isExternal(href);

  return (
    <li>
      <Link
        className={cx(
          "flex w-full flex-col rounded-md border border-gray-200 bg-gradient-to-b from-white to-gray-50 to-65% p-6 shadow-inner outline-none transition md:min-h-[14rem]",
          className,
        )}
        href={href}
        target={external ? "_blank" : undefined}
      >
        <div aria-hidden className="mb-8 flex h-10 items-start justify-between">
          <div className="relative h-full w-10">{logo}</div>
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

export const SelectedWork = () => (
  <section className="py-20" id="work">
    <Container>
      <Headline className="text-center">Selected work</Headline>
      <ul className="flex flex-col flex-wrap justify-center gap-4 pt-20 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <SelectedWorkProject
          className="hover:border-sky-500 focus-visible:border-sky-500"
          href="/projects/portfolio"
          logo={
            <Logo
              className="h-full w-full"
              stroke="url(#gradient-cyan-sky-blue)"
            />
          }
          title="mata.li"
        >
          My personal portfolio.
        </SelectedWorkProject>
        <SelectedWorkProject
          className="hover:border-cyan-500 focus-visible:border-cyan-500"
          href="https://fabryka-kreatywnosci.pl/"
          logo={
            <Image
              alt="Fabryka Kreatywności - Logo"
              fill
              sizes="40px"
              src={fabrykaKreatywnosci}
            />
          }
          title="Fabryka Kreatywności"
        >
          Children&apos;s entertainment website.
        </SelectedWorkProject>
        <SelectedWorkProject
          className="hover:border-black focus-visible:border-black"
          href="/projects/spacetag"
          logo={<SpaceTagLogomark className="h-full w-full text-black" />}
          title="SpaceTag"
        >
          3D satellite tracking tool.
        </SelectedWorkProject>
        <SelectedWorkProject
          className="hover:border-gray-950 focus-visible:border-gray-950"
          href="/projects/toki"
          logo={<TokiLogomark className="h-full w-full text-gray-950" />}
          title="Toki"
        >
          Minimalist count up timer.
        </SelectedWorkProject>
        <SelectedWorkProject
          className="hover:border-emerald-500 focus-visible:border-emerald-500"
          href="/projects/chopthebill"
          logo={<ChopTheBillLogomarkBackground className="h-full w-full" />}
          title="ChopTheBill"
        >
          Cost sharing made easy.
        </SelectedWorkProject>
        <SelectedWorkProject
          className="hover:border-gray-900 focus-visible:border-gray-900"
          href="/github?tab=repositories"
          logo={<GitHubIcon className="h-full w-full text-gray-900" />}
          title="More projects"
        >
          My GitHub repositories.
        </SelectedWorkProject>
      </ul>
    </Container>
  </section>
);
