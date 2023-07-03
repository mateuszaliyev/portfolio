"use client";

import type { ButtonHTMLAttributes } from "react";
import { useState } from "react";

import { cx } from "cva";

import { ChevronIcon } from "@/components/icons/chevron";
import { MoreIcon } from "@/components/icons/more";
import { TechnologyIcon } from "@/components/technology/icon";
import { TechnologyList } from "@/components/technology/list";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";

export type SkillsListButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick"
> & {
  expanded?: boolean;
};

const SkillsListButton = ({ expanded, onClick }: SkillsListButtonProps) => (
  <Tooltip>
    <TooltipContent>{expanded ? "Show less" : "Show more"}</TooltipContent>
    <TooltipTrigger asChild>
      <li className="h-6 w-6 md:h-8 md:w-8">
        <button
          className="h-full w-full rounded-full text-gray-500 outline-none transition hover:bg-gray-200 focus-visible:bg-gray-200"
          onClick={onClick}
        >
          <span className="sr-only">
            {expanded ? "Show less" : "Show more"}
          </span>
          <div aria-hidden className="relative h-full w-full">
            <MoreIcon
              className={cx(
                "absolute h-full w-full transition-all",
                expanded && "opacity-0"
              )}
            />
            <ChevronIcon
              className={cx(
                "absolute h-full w-full -rotate-90 opacity-0 transition-all",
                expanded && "opacity-100"
              )}
            />
          </div>
        </button>
      </li>
    </TooltipTrigger>
  </Tooltip>
);

export const Skills = () => {
  const [basicsExpanded, setBasicsExpanded] = useState(false);
  const [comfortableExpanded, setComfortableExpanded] = useState(false);
  const [specialityExpanded, setSpecialityExpanded] = useState(false);

  return (
    <div className="divide-y pt-20">
      <div className="flex flex-col gap-4 py-4 md:flex-row">
        <h2 className="w-full shrink-0 text-2xl md:w-80">I specialise in</h2>
        <TechnologyList>
          <TechnologyIcon
            aria-hidden={!specialityExpanded}
            className={!specialityExpanded ? "hidden" : undefined}
            href="https://cva.style/"
            logo="class-variance-authority"
            name="Class Variance Authority"
          />
          <TechnologyIcon
            href="https://w3.org/Style/CSS"
            logo="css"
            name="CSS"
          />
          <TechnologyIcon
            aria-hidden={!specialityExpanded}
            className={!specialityExpanded ? "hidden" : undefined}
            href="https://headlessui.com/"
            logo="headless-ui"
            name="Headless UI"
          />
          <TechnologyIcon href="https://w3.org/html" logo="html" name="HTML" />
          <TechnologyIcon
            href="https://ecma-international.org/publications-and-standards/standards/ecma-262"
            logo="javascript"
            name="JavaScript"
          />
          <TechnologyIcon
            href="https://nextjs.org/"
            logo="next-js"
            name="Next.js"
          />
          <TechnologyIcon
            href="https://radix-ui.com/"
            logo="radix-ui"
            name="Radix UI"
          />
          <TechnologyIcon href="https://react.dev/" logo="react" name="React" />
          <TechnologyIcon
            href="https://tailwindcss.com/"
            logo="tailwindcss"
            name="Tailwind CSS"
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
          <SkillsListButton
            expanded={specialityExpanded}
            onClick={() => setSpecialityExpanded((expanded) => !expanded)}
          />
        </TechnologyList>
      </div>
      <div className="flex flex-col gap-4 py-4 md:flex-row">
        <h2 className="w-full shrink-0 text-2xl md:w-80">
          I am comfortable with
        </h2>
        <TechnologyList>
          <TechnologyIcon
            href="https://astro.build/"
            logo="astro"
            name="Astro"
          />
          <TechnologyIcon
            aria-hidden={!comfortableExpanded}
            className={!comfortableExpanded ? "hidden" : undefined}
            href="https://date-fns.org/"
            logo="date-fns"
            name="date-fns"
          />
          <TechnologyIcon
            aria-hidden={!comfortableExpanded}
            className={!comfortableExpanded ? "hidden" : undefined}
            href="https://github.com/motdotla/dotenv"
            logo="dotenv"
            name="Dotenv"
          />
          <TechnologyIcon
            aria-hidden={!comfortableExpanded}
            className={!comfortableExpanded ? "hidden" : undefined}
            href="https://eslint.org/"
            logo="eslint"
            name="ESLint"
          />
          <TechnologyIcon
            href="https://github.com/"
            logo="github"
            name="GitHub"
          />
          <TechnologyIcon
            aria-hidden={!comfortableExpanded}
            className={!comfortableExpanded ? "hidden" : undefined}
            href="https://jwt.io/"
            logo="jwt"
            name="JSON Web Tokens"
          />
          <TechnologyIcon href="https://mdxjs.com/" logo="mdx" name="MDX" />
          <TechnologyIcon
            href="https://nodejs.org/"
            logo="node-js"
            name="Node.js"
          />
          <TechnologyIcon
            aria-hidden={!comfortableExpanded}
            className={!comfortableExpanded ? "hidden" : undefined}
            href="https://npmjs.com/"
            logo="npm"
            name="npm"
          />
          <TechnologyIcon
            aria-hidden={!comfortableExpanded}
            className={!comfortableExpanded ? "hidden" : undefined}
            href="https://pnpm.io/"
            logo="pnpm"
            name="pnpm"
          />
          <TechnologyIcon
            aria-hidden={!comfortableExpanded}
            className={!comfortableExpanded ? "hidden" : undefined}
            href="https://prettier.io/"
            logo="prettier"
            name="Prettier"
          />
          <TechnologyIcon
            href="https://prisma.io/"
            logo="prisma"
            name="Prisma"
          />
          <TechnologyIcon
            href="https://react-hook-form.com/"
            logo="react-hook-form"
            name="React Hook Form"
          />
          <TechnologyIcon
            href="https://sass-lang.com/"
            logo="sass"
            name="Sass"
          />
          <TechnologyIcon
            href="https://stitches.dev/"
            logo="stitches"
            name="Stitches"
          />
          <TechnologyIcon
            aria-hidden={!comfortableExpanded}
            className={!comfortableExpanded ? "hidden" : undefined}
            href="https://w3.org/Graphics/SVG/"
            logo="svg"
            name="SVG"
          />
          <TechnologyIcon
            href="https://tanstack.com/query"
            logo="tanstack-query"
            name="TanStack Query"
          />
          <TechnologyIcon href="https://vitejs.dev/" logo="vite" name="Vite" />
          <TechnologyIcon
            href="https://zustand-demo.pmnd.rs/"
            logo="zustand"
            name="Zustand"
          />
          <SkillsListButton
            expanded={comfortableExpanded}
            onClick={() => setComfortableExpanded((expanded) => !expanded)}
          />
        </TechnologyList>
      </div>
      <div className="flex flex-col gap-4 py-4 md:flex-row">
        <h2 className="w-full shrink-0 text-2xl md:w-80">I know basics of</h2>
        <TechnologyList>
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://adobe.com/products/photoshop.html"
            logo="adobe-photoshop"
            name="Adobe Photoshop"
          />
          <TechnologyIcon
            href="https://contentful.com/"
            logo="contentful"
            name="Contentful"
          />
          <TechnologyIcon href="https://deno.com/" logo="deno" name="Deno" />
          <TechnologyIcon
            href="https://expressjs.com/"
            logo="express"
            name="Express"
          />
          <TechnologyIcon
            href="https://graphql.org/"
            logo="graphql"
            name="GraphQL"
          />
          <TechnologyIcon href="https://git-scm.com/" logo="git" name="Git" />
          <TechnologyIcon
            href="https://gitlab.com/"
            logo="gitlab"
            name="GitLab"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://heroku.com/"
            logo="heroku"
            name="Heroku"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://immerjs.github.io/immer/"
            logo="immer"
            name="Immer"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://inkscape.org/"
            logo="inkscape"
            name="Inkscape"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://ionicframework.com/"
            logo="ionic"
            name="Ionic"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://jestjs.io/"
            logo="jest"
            name="Jest"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://lodash.com/"
            logo="lodash"
            name="Lodash"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://mui.com/"
            logo="mui"
            name="MUI"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://mysql.com/"
            logo="mysql"
            name="MySQL"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://i18next.com/"
            logo="i18next"
            name="next-i18next"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://nodemailer.com/"
            logo="nodemailer"
            name="Nodemailer"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://nodemon.io/"
            logo="nodemon"
            name="nodemon"
          />
          <TechnologyIcon href="https://nuxt.com/" logo="nuxt" name="Nuxt" />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://php.net/"
            logo="php"
            name="PHP"
          />
          <TechnologyIcon
            href="https://planetscale.com/"
            logo="planetscale"
            name="PlanetScale"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://postgresql.org/"
            logo="postgresql"
            name="PostgreSQL"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://web.dev/progressive-web-apps"
            logo="progressive-web-apps"
            name="Progressive Web Apps"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://python.org/"
            logo="python"
            name="Python"
          />
          <TechnologyIcon
            href="https://solidjs.com/"
            logo="solid"
            name="Solid"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://threejs.org/"
            logo="three-js"
            name="Three.js"
          />
          <TechnologyIcon
            aria-hidden={!basicsExpanded}
            className={!basicsExpanded ? "hidden" : undefined}
            href="https://turbo.build/repo"
            logo="turborepo"
            name="Turborepo"
          />
          <TechnologyIcon
            href="https://vuejs.org/"
            logo="vue-js"
            name="Vue.js"
          />
          <TechnologyIcon href="https://yarnpkg.com/" logo="yarn" name="Yarn" />
          <SkillsListButton
            expanded={basicsExpanded}
            onClick={() => setBasicsExpanded((expanded) => !expanded)}
          />
        </TechnologyList>
      </div>
    </div>
  );
};
