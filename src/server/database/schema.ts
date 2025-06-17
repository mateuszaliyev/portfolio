import {
  Access,
  EntityPersonLocationMode,
  LogoColorScheme,
  type EntityPersonRelationship,
  type LinkType,
  type LogoContentType,
  type Logo as LogoType,
  type Schedule,
  type SoftwareRole,
  type SoftwareType,
} from "@/constants";
import { relations } from "drizzle-orm";
import {
  date,
  index,
  json,
  numeric,
  pgTableCreator,
  real,
  text,
} from "drizzle-orm/pg-core";

import { generateId } from "@/server/id";

export type Link = {
  access: Access;
  description?: string;
  type: LinkType;
  url: string;
};

export type Logo = typeof logos.$inferSelect;
export type Software = typeof software.$inferSelect;

const foreignKey = text;

const id = <Name extends string = "">(name?: Name) =>
  text(name ?? "")
    .primaryKey()
    .$default(() => generateId());

const links = <Name extends string = "">(name?: Name) =>
  json(name ?? "").$type<Link[]>();

const slug = text;

const table = pgTableCreator((name) => name);

export const countries = table("countries", {
  id: id(),
  code: text().notNull().unique(),
});

export const countriesRelations = relations(countries, ({ many }) => ({
  settlements: many(settlements),
}));

export const entities = table("entities", {
  id: id(),
  caption: text(),
  links: links(),
  name: text().notNull(),
  slug: slug().notNull().unique(),
});

export const entitiesRelations = relations(entities, ({ many }) => ({
  locations: many(entityLocations),
  logos: many(entityLogos),
  people: many(entityPeople),
  software: many(software),
}));

export const entityLocations = table(
  "entity_locations",
  {
    id: id(),
    entityId: foreignKey("entity_id")
      .references(() => entities.id)
      .notNull(),
    locationId: foreignKey("location_id")
      .references(() => locations.id)
      .notNull(),
  },
  (entityLocation) => [
    index("entity_locations_entity_id_index").on(entityLocation.entityId),
    index("entity_locations_location_id_index").on(entityLocation.locationId),
  ],
);

export const entityLocationsRelations = relations(
  entityLocations,
  ({ one }) => ({
    entity: one(entities, {
      fields: [entityLocations.entityId],
      references: [entities.id],
    }),
    location: one(locations, {
      fields: [entityLocations.locationId],
      references: [locations.id],
    }),
  }),
);

export const entityLogos = table(
  "entity_logos",
  {
    id: id(),
    entityId: foreignKey("entity_id")
      .references(() => entities.id)
      .notNull(),
    logoId: foreignKey("logo_id")
      .references(() => logos.id)
      .notNull(),
  },
  (entityLogo) => [
    index("entity_logos_entity_id").on(entityLogo.entityId),
    index("entity_logos_logo_id").on(entityLogo.logoId),
  ],
);

export const entityLogosRelations = relations(entityLogos, ({ one }) => ({
  entity: one(entities, {
    fields: [entityLogos.entityId],
    references: [entities.id],
  }),
  logo: one(logos, {
    fields: [entityLogos.logoId],
    references: [logos.id],
  }),
}));

export const entityPeople = table(
  "entity_people",
  {
    id: id(),
    content: text(),
    entityId: foreignKey("entity_id")
      .references(() => entities.id)
      .notNull(),
    from: date({ mode: "string" }).notNull(),
    personId: foreignKey("person_id")
      .references(() => people.id)
      .notNull(),
    position: text().notNull(),
    relationship: text().$type<EntityPersonRelationship>().notNull(),
    schedule: text("schedule").$type<Schedule>(),
    to: date({ mode: "string" }),
  },
  (entityPerson) => [
    index("entity_people_entity_id_index").on(entityPerson.entityId),
    index("entity_people_person_id_index").on(entityPerson.personId),
  ],
);

export const entityPeopleRelations = relations(
  entityPeople,
  ({ many, one }) => ({
    entity: one(entities, {
      fields: [entityPeople.entityId],
      references: [entities.id],
    }),
    locations: many(entityPersonLocations),
    person: one(people, {
      fields: [entityPeople.personId],
      references: [people.id],
    }),
  }),
);

export const entityPersonLocations = table(
  "entity_person_locations",
  {
    id: id(),
    entityPersonId: foreignKey("entity_person_id")
      .references(() => entityPeople.id)
      .notNull(),
    locationId: foreignKey("location_id").references(() => locations.id),
    mode: text().$type<EntityPersonLocationMode>().notNull(),
  },
  (entityPersonLocation) => [
    index("entity_person_locations_entity_person_id_index").on(
      entityPersonLocation.entityPersonId,
    ),
    index("entity_person_locations_location_id_index").on(
      entityPersonLocation.locationId,
    ),
  ],
);

export const entityPersonLocationsRelations = relations(
  entityPersonLocations,
  ({ one }) => ({
    entityPerson: one(entityPeople, {
      fields: [entityPersonLocations.entityPersonId],
      references: [entityPeople.id],
    }),
    location: one(locations, {
      fields: [entityPersonLocations.locationId],
      references: [locations.id],
    }),
  }),
);

export const locations = table(
  "locations",
  {
    id: id(),
    apartmentNumber: text("apartment_number"),
    latitude: numeric({ precision: 8, scale: 6 }).notNull(),
    longitude: numeric({ precision: 9, scale: 6 }).notNull(),
    postalCode: text("postal_code"),
    settlementId: foreignKey("settlement_id").references(() => settlements.id),
    street: text(),
    streetNumber: text("street_number"),
  },
  (location) => [
    index("locations_settlement_id_index").on(location.settlementId),
  ],
);

export const locationRelations = relations(locations, ({ many, one }) => ({
  entities: many(entityLocations),
  entityPeople: many(entityPersonLocations),
  settlement: one(settlements, {
    fields: [locations.settlementId],
    references: [settlements.id],
  }),
}));

export const logos = table("logos", {
  id: id(),
  colorScheme: text("color_scheme").$type<LogoColorScheme>(),
  content: text().notNull(),
  contentType: text("content_type").notNull().$type<LogoContentType>(),
  height: real().notNull(),
  slug: slug().notNull().unique(),
  type: text().notNull().$type<LogoType>(),
  width: real().notNull(),
});

export const logosRelations = relations(logos, ({ many }) => ({
  entities: many(entityLogos),
  software: many(softwareLogos),
}));

export const people = table("people", {
  id: id(),
  email: text().unique(),
  links: links(),
  name: text().notNull(),
  slug: slug().notNull().unique(),
});

export const peopleRelations = relations(people, ({ many }) => ({
  entities: many(entityPeople),
  software: many(softwarePeople),
}));

export const settlements = table(
  "settlements",
  {
    id: id(),
    countryId: foreignKey("country_id")
      .references(() => countries.id)
      .notNull(),
    name: text().notNull(),
  },
  (settlement) => [
    index("settlements_country_id_index").on(settlement.countryId),
  ],
);

export const settlementsRelations = relations(settlements, ({ many, one }) => ({
  country: one(countries, {
    fields: [settlements.countryId],
    references: [countries.id],
  }),
  locations: many(locations),
}));

export const software = table(
  "software",
  {
    id: id(),
    access: text().notNull().$type<Access>().default(Access.Public),
    caption: text(),
    content: text(),
    data: json(),
    entityId: foreignKey("entity_id").references(() => entities.id),
    links: links(),
    name: text().notNull(),
    publicName: text("public_name"),
    slug: slug().notNull().unique(),
    type: text().notNull().$type<SoftwareType>(),
  },
  (software) => [index("software_entity_id_index").on(software.entityId)],
);

export const softwareRelations = relations(software, ({ many, one }) => ({
  dependencies: many(softwareDependencies, { relationName: "dependent" }),
  dependents: many(softwareDependencies, { relationName: "dependency" }),
  entity: one(entities, {
    fields: [software.entityId],
    references: [entities.id],
  }),
  logos: many(softwareLogos),
  people: many(softwarePeople),
}));

export const softwareDependencies = table(
  "software_dependencies",
  {
    id: id(),
    dependencyId: foreignKey("dependency_id")
      .references(() => software.id)
      .notNull(),
    dependentId: foreignKey("dependent_id")
      .references(() => software.id)
      .notNull(),
  },
  (softwareDependency) => [
    index("software_dependencies_dependency_id_index").on(
      softwareDependency.dependencyId,
    ),
    index("software_dependencies_dependent_id_index").on(
      softwareDependency.dependentId,
    ),
  ],
);

export const softwareDependenciesRelations = relations(
  softwareDependencies,
  ({ one }) => ({
    dependency: one(software, {
      fields: [softwareDependencies.dependencyId],
      references: [software.id],
      relationName: "dependency",
    }),
    dependent: one(software, {
      fields: [softwareDependencies.dependentId],
      references: [software.id],
      relationName: "dependent",
    }),
  }),
);

export const softwareLogos = table(
  "software_logos",
  {
    id: id(),
    logoId: foreignKey("logo_id")
      .references(() => logos.id)
      .notNull(),
    softwareId: foreignKey("software_id")
      .references(() => software.id)
      .notNull(),
  },
  (softwareLogo) => [
    index("software_logos_logo_id").on(softwareLogo.logoId),
    index("software_logos_software_id").on(softwareLogo.softwareId),
  ],
);

export const softwareLogosRelations = relations(softwareLogos, ({ one }) => ({
  logo: one(logos, {
    fields: [softwareLogos.logoId],
    references: [logos.id],
  }),
  software: one(software, {
    fields: [softwareLogos.softwareId],
    references: [software.id],
  }),
}));

export const softwarePeople = table(
  "software_people",
  {
    id: id(),
    content: text(),
    personId: foreignKey("person_id")
      .references(() => people.id)
      .notNull(),
    position: text(),
    roles: json().$type<SoftwareRole[]>().notNull(),
    softwareId: foreignKey("software_id")
      .references(() => software.id)
      .notNull(),
  },
  (softwarePerson) => [
    index("software_people_person_id_index").on(softwarePerson.personId),
    index("software_people_software_id_index").on(softwarePerson.softwareId),
  ],
);

export const softwarePeopleRelations = relations(softwarePeople, ({ one }) => ({
  person: one(people, {
    fields: [softwarePeople.personId],
    references: [people.id],
  }),
  software: one(software, {
    fields: [softwarePeople.softwareId],
    references: [software.id],
  }),
}));
