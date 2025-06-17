import {
  Access,
  EntityPersonLocationMode,
  Schedule,
  SoftwareType,
} from "@/constants";

import type { Software } from "@/server/database/schema";

export const formatEntityPersonLocationMode = (() => {
  const map: Record<EntityPersonLocationMode, string> = {
    [EntityPersonLocationMode.Hybrid]: "Hybrid",
    [EntityPersonLocationMode.OnSite]: "On-site",
    [EntityPersonLocationMode.Remote]: "Remote",
  };

  return (entityPersonLocationMode: EntityPersonLocationMode) =>
    map[entityPersonLocationMode];
})();

export const formatLocation = (() => {
  const displayNames = new Intl.DisplayNames("en", { type: "region" });

  return (countryCode: string, settlement?: string) =>
    settlement ? `${settlement}, ${displayNames.of(countryCode)}` : countryCode;
})();

export const formatLocationList = (
  locations: {
    location?: {
      settlement?: { country: { code: string }; name: string } | null;
    } | null;
    mode: EntityPersonLocationMode;
  }[],
) =>
  [
    ...new Set(
      locations
        .map(({ location, mode }) => {
          if (mode === EntityPersonLocationMode.Remote) {
            return formatEntityPersonLocationMode(mode);
          }

          if (!location?.settlement) return "";

          const formattedLocation = formatLocation(
            location.settlement.country.code,
            location.settlement.name,
          );

          if (mode === EntityPersonLocationMode.OnSite) {
            return formattedLocation;
          }

          return `${formattedLocation} (Hybrid)`;
        })
        .filter(Boolean),
    ),
  ].join(", ");

export const formatSchedule = (() => {
  const map: Record<Schedule, string> = {
    [Schedule.FullTime]: "Full-time",
    [Schedule.PartTime]: "Part-time",
  };

  return (schedule: Schedule) => map[schedule];
})();

export const formatSoftwareName = (
  software: Pick<Software, "access" | "name" | "publicName">,
) =>
  software.access === Access.Confidential
    ? (software.publicName ?? software.name.replace(/\S/g, "*"))
    : software.name;

export const formatSoftwareType = (() => {
  const map: Record<SoftwareType, string> = {
    [SoftwareType.Application]: "Application",
    [SoftwareType.CICD]: "CI/CD",
    [SoftwareType.Collaboration]: "Collaboration",
    [SoftwareType.ComponentLibrary]: "Component library",
    [SoftwareType.ContentManagementSystem]: "CMS",
    [SoftwareType.Database]: "Database",
    [SoftwareType.Framework]: "Framework",
    [SoftwareType.Game]: "Game",
    [SoftwareType.Language]: "Language",
    [SoftwareType.LargeLanguageModel]: "LLM",
    [SoftwareType.Library]: "Library",
    [SoftwareType.PackageManagement]: "Package management",
    [SoftwareType.Runtime]: "Runtime",
    [SoftwareType.StateManagement]: "State management",
    [SoftwareType.StylingSolution]: "Styling solution",
    [SoftwareType.TestingLibrary]: "Testing",
    [SoftwareType.Tool]: "Tool",
    [SoftwareType.VersionControl]: "Version control",
  };

  return (softwareType: SoftwareType) => map[softwareType];
})();

export const slug = (input: string) =>
  input
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
