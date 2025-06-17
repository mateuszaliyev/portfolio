import { environment } from "@/environment";

import { database } from "@/server/database";

export const people = {
  getByEnvironmentVariable: () => people.getBySlug(environment.PERSON_SLUG),
  getBySlug: (slug: string) =>
    database.query.people.findFirst({
      where: (person, { eq }) => eq(person.slug, slug),
      with: {
        entities: {
          with: {
            entity: { with: { logos: { with: { logo: true } } } },
            locations: {
              with: {
                location: { with: { settlement: { with: { country: true } } } },
              },
            },
          },
        },
        software: {
          with: {
            software: {
              with: { entity: true, logos: { with: { logo: true } } },
            },
          },
        },
      },
    }),
};
