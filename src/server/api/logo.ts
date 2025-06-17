import { database } from "@/server/database";

export const logo = {
  getById: async (id: string) =>
    database.query.logos.findFirst({
      where: (logo, { eq }) => eq(logo.id, id),
    }),
};
