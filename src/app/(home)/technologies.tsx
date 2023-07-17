"use client";

import { ParentSize } from "@visx/responsive";
import { Text } from "@visx/text";
import { Wordcloud } from "@visx/wordcloud";

import { Headline } from "@/components/headline";

import { useMediaQuery } from "@/hooks/media-query";

export type TechnologiesProps = {
  font: string;
};

type Technology = {
  familiarity: number;
  importance: number;
  url: `https://${string}`;
};

const colors = ["#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155"];

const technologies: Record<string, Technology> = {
  "Adobe Photoshop": {
    familiarity: 1,
    importance: 1,
    url: "https://adobe.com/products/photoshop.html",
  },
  Astro: {
    familiarity: 2,
    importance: 3,
    url: "https://astro.build/",
  },
  Contentful: {
    familiarity: 1,
    importance: 2,
    url: "https://contentful.com/",
  },
  CSS: {
    familiarity: 3,
    importance: 4,
    url: "https://w3.org/Style/CSS",
  },
  cva: {
    familiarity: 3,
    importance: 1,
    url: "https://cva.style/docs",
  },
  "date-fns": {
    familiarity: 2,
    importance: 1,
    url: "https://date-fns.org/",
  },
  Deno: {
    familiarity: 1,
    importance: 1,
    url: "https://deno.com/",
  },
  Dotenv: {
    familiarity: 2,
    importance: 1,
    url: "https://github.com/motdotla/dotenv",
  },
  ESLint: {
    familiarity: 2,
    importance: 1,
    url: "https://eslint.org/",
  },
  Express: {
    familiarity: 1,
    importance: 2,
    url: "https://expressjs.com/",
  },
  Git: {
    familiarity: 2,
    importance: 3,
    url: "https://git-scm.com/",
  },
  GitHub: {
    familiarity: 2,
    importance: 3,
    url: "https://github.com/",
  },
  GitLab: {
    familiarity: 1,
    importance: 2,
    url: "https://gitlab.com/",
  },
  GraphQL: {
    familiarity: 1,
    importance: 2,
    url: "https://graphql.org/",
  },
  "Headless UI": {
    familiarity: 3,
    importance: 2,
    url: "https://headlessui.com/",
  },
  Heroku: {
    familiarity: 1,
    importance: 1,
    url: "https://heroku.com/",
  },
  HTML: {
    familiarity: 3,
    importance: 4,
    url: "https://w3.org/html/",
  },
  Immer: {
    familiarity: 1,
    importance: 1,
    url: "https://immerjs.github.io/immer/",
  },
  Inkscape: {
    familiarity: 1,
    importance: 1,
    url: "https://inkscape.org/",
  },
  Ionic: {
    familiarity: 1,
    importance: 1,
    url: "https://ionicframework.com/",
  },
  JavaScript: {
    familiarity: 3,
    importance: 4,
    url: "https://ecma-international.org/publications-and-standards/standards/ecma-262",
  },
  Jest: {
    familiarity: 1,
    importance: 1,
    url: "https://jestjs.io/",
  },
  "JSON Web Tokens": {
    familiarity: 2,
    importance: 1,
    url: "https://jwt.io/",
  },
  Lodash: {
    familiarity: 1,
    importance: 1,
    url: "https://lodash.com/",
  },
  MDX: {
    familiarity: 2,
    importance: 2,
    url: "https://mdxjs.com/",
  },
  MUI: {
    familiarity: 1,
    importance: 1,
    url: "https://mui.com/",
  },
  MySQL: {
    familiarity: 1,
    importance: 2,
    url: "https://mysql.com/",
  },
  "Next.js": {
    familiarity: 3,
    importance: 4,
    url: "https://nextjs.org/",
  },
  "next-i18next": {
    familiarity: 1,
    importance: 1,
    url: "https://i18next.com/",
  },
  "NextAuth.js": {
    familiarity: 2,
    importance: 2,
    url: "https://next-auth.js.org/",
  },
  "Node.js": {
    familiarity: 2,
    importance: 3,
    url: "https://nodejs.org/",
  },
  Nodemailer: {
    familiarity: 1,
    importance: 1,
    url: "https://nodemailer.com/",
  },
  nodemon: {
    familiarity: 1,
    importance: 1,
    url: "https://nodemon.io/",
  },
  npm: {
    familiarity: 2,
    importance: 1,
    url: "https://npmjs.com/",
  },
  Nuxt: {
    familiarity: 1,
    importance: 3,
    url: "https://nuxt.com/",
  },
  PHP: {
    familiarity: 1,
    importance: 1,
    url: "https://php.net/",
  },
  PlanetScale: {
    familiarity: 1,
    importance: 2,
    url: "https://planetscale.com/",
  },
  pnpm: {
    familiarity: 2,
    importance: 1,
    url: "https://pnpm.io/",
  },
  PostgreSQL: {
    familiarity: 1,
    importance: 1,
    url: "https://postgresql.org/",
  },
  Prettier: {
    familiarity: 2,
    importance: 1,
    url: "https://prettier.io/",
  },
  Prisma: {
    familiarity: 2,
    importance: 2,
    url: "https://prisma.io/",
  },
  "Progressive Web Apps": {
    familiarity: 1,
    importance: 2,
    url: "https://web.dev/progressive-web-apps",
  },
  Python: {
    familiarity: 1,
    importance: 1,
    url: "https://python.org/",
  },
  "Radix UI": {
    familiarity: 3,
    importance: 2,
    url: "https://radix-ui.com/",
  },
  React: {
    familiarity: 3,
    importance: 4,
    url: "https://react.dev/",
  },
  "React Hook Form": {
    familiarity: 2,
    importance: 2,
    url: "https://react-hook-form.com/",
  },
  Sass: {
    familiarity: 2,
    importance: 2,
    url: "https://sass-lang.com/",
  },
  Solid: {
    familiarity: 1,
    importance: 3,
    url: "https://solidjs.com/",
  },
  Stitches: {
    familiarity: 2,
    importance: 2,
    url: "https://stitches.dev/",
  },
  SVG: {
    familiarity: 2,
    importance: 1,
    url: "https://w3.org/Graphics/SVG/",
  },
  "Tailwind CSS": {
    familiarity: 3,
    importance: 4,
    url: "https://tailwindcss.com/",
  },
  "TanStack Query": {
    familiarity: 2,
    importance: 2,
    url: "https://tanstack.com/query",
  },
  "Three.js": {
    familiarity: 1,
    importance: 2,
    url: "https://threejs.org/",
  },
  tRPC: {
    familiarity: 3,
    importance: 3,
    url: "https://trpc.io/",
  },
  Turborepo: {
    familiarity: 1,
    importance: 2,
    url: "https://turbo.build/repo",
  },
  TypeScript: {
    familiarity: 3,
    importance: 4,
    url: "https://typescriptlang.org/",
  },
  Vercel: {
    familiarity: 3,
    importance: 2,
    url: "https://vercel.com/",
  },
  Vite: {
    familiarity: 2,
    importance: 2,
    url: "https://vitejs.dev/",
  },
  "Vue.js": {
    familiarity: 1,
    importance: 3,
    url: "https://vuejs.org/",
  },
  Yarn: {
    familiarity: 1,
    importance: 1,
    url: "https://yarnpkg.com/",
  },
  Zod: {
    familiarity: 3,
    importance: 4,
    url: "https://zod.dev/",
  },
  Zustand: {
    familiarity: 2,
    importance: 3,
    url: "https://zustand-demo.pmnd.rs/",
  },
};

const words = Object.entries(technologies).map(
  ([name, { familiarity, importance }]) => ({
    text: name,
    value: familiarity * importance + 1,
  }),
);

export const Technologies = ({ font }: TechnologiesProps) => {
  const isLargeBreakpoint = useMediaQuery("(min-width: 1024px)");
  const isMediumBreakpoint = useMediaQuery("(min-width: 720px)");
  const isSmallBreakpoint = useMediaQuery("(min-width: 640px)");

  return (
    <section>
      <Headline className="text-center">Technologies I&apos;ve used</Headline>
      <div className="h-[48rem] w-full 2xs:h-[40rem] xs:h-[32rem] sm:h-[36rem] md:h-[44rem] lg:h-[54rem] xl:h-[44rem] 2xl:h-[40rem]">
        <ParentSize>
          {({ height, width }) => (
            <Wordcloud
              font={font}
              fontSize={({ value }) =>
                Math.log(value) *
                (isLargeBreakpoint
                  ? 32
                  : isMediumBreakpoint
                  ? 24
                  : isSmallBreakpoint
                  ? 20
                  : 16)
              }
              height={height}
              padding={
                isLargeBreakpoint
                  ? 8
                  : isMediumBreakpoint
                  ? 6
                  : isSmallBreakpoint
                  ? 5
                  : 4
              }
              random={() => 0.5}
              rotate={0}
              spiral="rectangular"
              width={width}
              words={words}
            >
              {(words) =>
                words.map(
                  ({ font, rotate = 0, size, text, x = 0, y = 0 }, index) => {
                    if (!text) return null;

                    return technologies[text].url ? (
                      <a
                        href={technologies[text].url}
                        key={text}
                        rel="noreferrer"
                        target="_blank"
                        /* @ts-expect-error Property `transform` does not exist on type `DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>` */
                        transform={`translate(${x}, ${y}) rotate(${rotate})`}
                      >
                        <Text
                          fill={colors[index % colors.length]}
                          fontFamily={font}
                          fontSize={size}
                          textAnchor="middle"
                        >
                          {text}
                        </Text>
                      </a>
                    ) : (
                      <Text
                        fill={colors[index % colors.length]}
                        fontFamily={font}
                        fontSize={size}
                        textAnchor="middle"
                        transform={`translate(${x}, ${y}) rotate(${rotate})`}
                      >
                        {text}
                      </Text>
                    );
                  },
                )
              }
            </Wordcloud>
          )}
        </ParentSize>
      </div>
    </section>
  );
};
