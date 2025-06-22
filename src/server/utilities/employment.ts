import { EntityPersonRelationship, Schedule } from "@/constants";

import type { api } from "@/server/api";

export const parseEmploymentsFromPersonEntities = (
  entities: NonNullable<
    Awaited<ReturnType<typeof api.people.getByEnvironmentVariable>>
  >["entities"],
) =>
  entities
    .filter(({ relationship }) =>
      (
        [
          EntityPersonRelationship.Employee,
          EntityPersonRelationship.Freelancer,
          EntityPersonRelationship.Intern,
        ] as string[]
      ).includes(relationship),
    )
    .sort((a, z) => z.from.localeCompare(a.from))
    .map((employment, index, employments) => {
      if (employment.entity.id !== employments[index + 1]?.entity.id) {
        return employment;
      }

      let entityEmploymentCount = 1;

      while (
        employment.entity.id ===
        employments[index + ++entityEmploymentCount]?.entity.id
      );

      const entityEmployments = employments.slice(
        index,
        index + entityEmploymentCount - 1,
      );

      employments.splice(index + 1, entityEmploymentCount - 1);

      const relationships = new Set(
        entityEmployments.map((employment) => employment.relationship),
      );

      const schedules = new Set(
        entityEmployments.map((employment) => employment.schedule),
      );

      return {
        ...employment,
        content: entityEmployments
          .map((employment) => employment.content)
          .join("\n---\n"),
        locations: entityEmployments.flatMap(
          (employment) => employment.locations,
        ),
        position: entityEmployments
          .map((employment) => employment.position)
          .join(", "),
        relationship: relationships.has(EntityPersonRelationship.Employee)
          ? EntityPersonRelationship.Employee
          : relationships.has(EntityPersonRelationship.Freelancer)
            ? EntityPersonRelationship.Freelancer
            : employment.relationship,
        schedule: schedules.has(Schedule.FullTime)
          ? Schedule.FullTime
          : schedules.has(Schedule.PartTime)
            ? Schedule.PartTime
            : employment.schedule,
        to: entityEmployments.at(-1)!.to,
      };
    });
