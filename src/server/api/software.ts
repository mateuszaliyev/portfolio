import { z } from "zod/v4";

import { environment } from "@/environment";

import { database } from "@/server/database";

export type Portfolio = z.output<typeof portfolio>;

export type SoftwareGetByEnvironmentVariableReturnType = Awaited<
  ReturnType<typeof software.getByEnvironmentVariable>
>;

export type SoftwareGetReturnType = Awaited<ReturnType<typeof software.get>>;

const string = z.string().check(z.trim(), z.minLength(1));

const portfolioEducationEntry = z.object({
  deck: string,
  heading: string,
  slug: string,
});

const portfolio = z.object({
  home: z.object({
    education: z.array(
      z.discriminatedUnion("type", [
        portfolioEducationEntry.extend({ type: z.literal("entity") }),
        portfolioEducationEntry.extend({ type: z.literal("software") }),
      ]),
    ),
    hero: z.object({ deck: string, heading: string }),
    technologies: z.object({
      featured: z.array(string),
      other: z.array(string),
    }),
  }),
});

export const software = {
  get: async ({ slugs }: { slugs?: string[] }) =>
    database.query.software.findMany({
      where: slugs
        ? (software, { inArray }) => inArray(software.slug, slugs)
        : undefined,
      with: { logos: { with: { logo: true } } },
    }),
  getByEnvironmentVariable: async () => {
    const project = await software.getBySlug(environment.SOFTWARE_SLUG);

    if (!project) return;

    const { data, ...rest } = project;

    const parsedData = portfolio.safeParse(data);

    if (!parsedData.success) return;

    return { ...rest, data: parsedData.data };
  },
  getBySlug: (slug: string) =>
    database.query.software.findFirst({
      where: (software, { eq }) => eq(software.slug, slug),
      with: {
        dependencies: {
          with: { dependency: { with: { logos: { with: { logo: true } } } } },
        },
        dependents: {
          with: {
            dependent: {
              with: {
                entity: true,
                logos: { with: { logo: true } },
                people: { with: { person: true } },
              },
            },
          },
        },
        entity: true,
        logos: { with: { logo: true } },
        people: { with: { person: true } },
      },
    }),
};
