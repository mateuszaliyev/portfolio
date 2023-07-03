import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { GitHubIcon } from "@/components/icons/github";
import { LinkButton, type LinkButtonProps } from "@/components/link/button";
import { ParallaxLines } from "@/components/parallax-lines";

export type ProjectProps<RepositoryRoute, WebsiteRoute> = {
  children: ReactNode;
  logo: (props: { className?: string }) => JSX.Element;
  name: string;
  repository?: LinkButtonProps<RepositoryRoute>["href"];
  website?: LinkButtonProps<WebsiteRoute>["href"];
};

export const Project = <RepositoryRoute, WebsiteRoute>({
  children,
  logo: Logo,
  name,
  repository,
  website,
}: ProjectProps<RepositoryRoute, WebsiteRoute>) => (
  <>
    <ParallaxLines className="relative z-[-1] flex min-h-screen scale-[2] flex-col bg-gray-100 -translate-z-px">
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pb-36"
      >
        <Logo className="h-64 w-64 text-gray-300 md:h-96 md:w-96" />
      </div>
      <Container
        className="absolute inset-0 flex grow items-end justify-start gap-4 pb-20"
        size="large"
      >
        <h1 className="relative inline-flex py-2 text-6xl text-gray-400 md:text-9xl">
          {name}
        </h1>
      </Container>
    </ParallaxLines>
    <section className="bg-gradient-section py-20">
      <Container className="prose prose-lg prose-slate sm:prose-xl md:prose-2xl prose-headings:font-normal prose-headings:text-gray-400 prose-h2:relative prose-h2:z-heading prose-h2:!leading-loose prose-h2:before:absolute prose-h2:before:inset-y-0 prose-h2:before:left-[calc(-50vw+50%)] prose-h2:before:z-[-1] prose-h2:before:w-screen prose-h2:before:bg-gray-100 prose-a:font-normal prose-a:no-underline prose-img:select-none prose-img:rounded prose-img:shadow-lg">
        {children}
      </Container>
    </section>
    {(repository || website) && (
      <section className="py-20">
        <Container className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {website && (
            <LinkButton href={website} target="_blank">
              View Live
            </LinkButton>
          )}
          {repository && (
            <LinkButton href={repository} target="_blank" variant="secondary">
              <GitHubIcon
                className="mr-2 h-5 w-5"
                fill="url(#gradient-cyan-sky-blue)"
              />
              Source Code
            </LinkButton>
          )}
        </Container>
      </section>
    )}
  </>
);
