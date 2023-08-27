"use client";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import { Headline } from "@/components/headline";

import { useMediaQuery } from "@/hooks/media-query";

const ParentSize = dynamic(
  () => import("@visx/responsive").then(({ ParentSize }) => ParentSize),
  { ssr: false },
);

const Text = dynamic(() => import("@visx/text").then(({ Text }) => Text), {
  ssr: false,
});

const Wordcloud = dynamic(
  () => import("@visx/wordcloud").then(({ Wordcloud }) => Wordcloud),
  { ssr: false },
);

export type TechnologiesProps = {
  font?: string;
};

type Technology = {
  score: number;
  url: `https://${string}`;
};

const colors = ["#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155"];

const technologies: Record<string, Technology> = {
  "Adobe Photoshop": {
    score: 2,
    url: "https://adobe.com/products/photoshop.html",
  },
  Astro: {
    score: 6,
    url: "https://astro.build/",
  },
  Contentful: {
    score: 4,
    url: "https://contentful.com/",
  },
  CSS: {
    score: 12,
    url: "https://w3.org/Style/CSS",
  },
  cva: {
    score: 4,
    url: "https://cva.style/docs",
  },
  "date-fns": {
    score: 2,
    url: "https://date-fns.org/",
  },
  Deno: {
    score: 2,
    url: "https://deno.com/",
  },
  Dotenv: {
    score: 2,
    url: "https://github.com/motdotla/dotenv",
  },
  ESLint: {
    score: 2,
    url: "https://eslint.org/",
  },
  Express: {
    score: 2,
    url: "https://expressjs.com/",
  },
  Git: {
    score: 8,
    url: "https://git-scm.com/",
  },
  GitHub: {
    score: 8,
    url: "https://github.com/",
  },
  GitLab: {
    score: 2,
    url: "https://gitlab.com/",
  },
  GraphQL: {
    score: 2,
    url: "https://graphql.org/",
  },
  "Headless UI": {
    score: 4,
    url: "https://headlessui.com/",
  },
  Heroku: {
    score: 1,
    url: "https://heroku.com/",
  },
  HTML: {
    score: 12,
    url: "https://w3.org/html/",
  },
  Immer: {
    score: 2,
    url: "https://immerjs.github.io/immer/",
  },
  Inkscape: {
    score: 2,
    url: "https://inkscape.org/",
  },
  Ionic: {
    score: 1,
    url: "https://ionicframework.com/",
  },
  JavaScript: {
    score: 12,
    url: "https://ecma-international.org/publications-and-standards/standards/ecma-262",
  },
  Jest: {
    score: 1,
    url: "https://jestjs.io/",
  },
  "JSON Web Tokens": {
    score: 2,
    url: "https://jwt.io/",
  },
  Lodash: {
    score: 1,
    url: "https://lodash.com/",
  },
  MDX: {
    score: 6,
    url: "https://mdxjs.com/",
  },
  MUI: {
    score: 1,
    url: "https://mui.com/",
  },
  MySQL: {
    score: 2,
    url: "https://mysql.com/",
  },
  "Next.js": {
    score: 12,
    url: "https://nextjs.org/",
  },
  "next-i18next": {
    score: 2,
    url: "https://i18next.com/",
  },
  "NextAuth.js": {
    score: 6,
    url: "https://next-auth.js.org/",
  },
  "Node.js": {
    score: 8,
    url: "https://nodejs.org/",
  },
  Nodemailer: {
    score: 1,
    url: "https://nodemailer.com/",
  },
  nodemon: {
    score: 1,
    url: "https://nodemon.io/",
  },
  npm: {
    score: 4,
    url: "https://npmjs.com/",
  },
  Nuxt: {
    score: 4,
    url: "https://nuxt.com/",
  },
  PHP: {
    score: 1,
    url: "https://php.net/",
  },
  PlanetScale: {
    score: 4,
    url: "https://planetscale.com/",
  },
  pnpm: {
    score: 6,
    url: "https://pnpm.io/",
  },
  PostgreSQL: {
    score: 2,
    url: "https://postgresql.org/",
  },
  Prettier: {
    score: 2,
    url: "https://prettier.io/",
  },
  Prisma: {
    score: 6,
    url: "https://prisma.io/",
  },
  "Progressive Web Apps": {
    score: 1,
    url: "https://web.dev/progressive-web-apps",
  },
  Python: {
    score: 1,
    url: "https://python.org/",
  },
  "Radix UI": {
    score: 8,
    url: "https://radix-ui.com/",
  },
  React: {
    score: 12,
    url: "https://react.dev/",
  },
  "React Aria": {
    score: 2,
    url: "https://react-spectrum.adobe.com/react-aria",
  },
  "React Hook Form": {
    score: 8,
    url: "https://react-hook-form.com/",
  },
  Sass: {
    score: 6,
    url: "https://sass-lang.com/",
  },
  "shadcn/ui": {
    score: 4,
    url: "https://ui.shadcn.com/",
  },
  Solid: {
    score: 4,
    url: "https://solidjs.com/",
  },
  Stitches: {
    score: 6,
    url: "https://stitches.dev/",
  },
  SVG: {
    score: 3,
    url: "https://w3.org/Graphics/SVG/",
  },
  "Tailwind CSS": {
    score: 12,
    url: "https://tailwindcss.com/",
  },
  "TanStack Query": {
    score: 8,
    url: "https://tanstack.com/query",
  },
  "Three.js": {
    score: 1,
    url: "https://threejs.org/",
  },
  Tiptap: {
    score: 2,
    url: "https://tiptap.dev/",
  },
  tRPC: {
    score: 12,
    url: "https://trpc.io/",
  },
  Turborepo: {
    score: 2,
    url: "https://turbo.build/repo",
  },
  TypeScript: {
    score: 12,
    url: "https://typescriptlang.org/",
  },
  Vercel: {
    score: 8,
    url: "https://vercel.com/",
  },
  Vite: {
    score: 6,
    url: "https://vitejs.dev/",
  },
  "Vue.js": {
    score: 4,
    url: "https://vuejs.org/",
  },
  Yarn: {
    score: 2,
    url: "https://yarnpkg.com/",
  },
  Zod: {
    score: 12,
    url: "https://zod.dev/",
  },
  Zustand: {
    score: 8,
    url: "https://zustand-demo.pmnd.rs/",
  },
};

const words = Object.entries(technologies).map(([name, { score }]) => ({
  text: name,
  value: score,
}));

export const Technologies = ({ font }: TechnologiesProps) => {
  const [show, setShow] = useState(false);

  const isLargeBreakpoint = useMediaQuery("(min-width: 1024px)");
  const isMediumBreakpoint = useMediaQuery("(min-width: 720px)");
  const isSmallBreakpoint = useMediaQuery("(min-width: 640px)");

  useEffect(() => {
    const handleScroll = () => {
      setShow(true);
    };

    document
      .querySelector("body > div")
      ?.addEventListener("scroll", handleScroll);

    return () => {
      document
        .querySelector("body > div")
        ?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Headline className="text-center">Technologies I&apos;ve used</Headline>
      <div className="h-[48rem] w-full 2xs:h-[40rem] xs:h-[32rem] sm:h-[36rem] md:h-[44rem] lg:h-[54rem] xl:h-[44rem] 2xl:h-[40rem]">
        {show && (
          <ParentSize>
            {({ height, width }) => (
              <Wordcloud
                font={font}
                fontSize={(datum) =>
                  0.9 *
                  Math.log((datum as (typeof words)[number]).value + 1) *
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

                      return (
                        <a
                          href={technologies[text]?.url}
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
                      );
                    },
                  )
                }
              </Wordcloud>
            )}
          </ParentSize>
        )}
      </div>
    </section>
  );
};
