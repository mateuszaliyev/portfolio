import { database } from "@/server/database";

export const entity = {
  getBySlug: (slug: string) =>
    database.query.entities.findFirst({
      where: (entity, { eq }) => eq(entity.slug, slug),
      with: {
        logos: { with: { logo: true } },
        people: {
          orderBy: (entityPerson, { asc }) => asc(entityPerson.from),
          with: {
            locations: {
              with: {
                location: { with: { settlement: { with: { country: true } } } },
              },
            },
            person: true,
          },
        },
        software: {
          with: {
            logos: { with: { logo: true } },
            people: { with: { person: true } },
          },
        },
      },
    }),
};
