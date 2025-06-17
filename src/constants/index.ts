export type Access = (typeof Access)[keyof typeof Access];

export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export type EntityPersonLocationMode =
  (typeof EntityPersonLocationMode)[keyof typeof EntityPersonLocationMode];

export type EntityPersonRelationship =
  (typeof EntityPersonRelationship)[keyof typeof EntityPersonRelationship];

export type LinkType = (typeof LinkType)[keyof typeof LinkType];

export type Logo = (typeof Logo)[keyof typeof Logo];

export type LogoColorScheme =
  (typeof LogoColorScheme)[keyof typeof LogoColorScheme];

export type LogoContentType = Extract<
  ContentType,
  "image/svg+xml" | "text/uri-list"
>;

export type Platform = (typeof Platform)[keyof typeof Platform];

export type Schedule = (typeof Schedule)[keyof typeof Schedule];

export type SoftwareRole = (typeof SoftwareRole)[keyof typeof SoftwareRole];

export type SoftwareType = (typeof SoftwareType)[keyof typeof SoftwareType];

export const Access = {
  Confidential: "confidential",
  Discreet: "discreet",
  Private: "private",
  Public: "public",
  Unavailable: "unavailable",
} as const;

export const ContentType = {
  Svg: "image/svg+xml",
  UriList: "text/uri-list",
} as const;

export const EntityPersonLocationMode = {
  Hybrid: "hybrid",
  OnSite: "on-site",
  Remote: "remote",
} as const;

export const EntityPersonRelationship = {
  Employee: "employee",
  Freelancer: "freelancer",
  Intern: "intern",
  Member: "member",
  Student: "student",
} as const;

export const LinkType = {
  Profile: "profile",
  Source: "source",
  Website: "website",
} as const;

export const Logo = {
  Lockup: "lockup",
  Mark: "mark",
  MarkContained: "mark-contained",
  Type: "type",
} as const;

export const LogoColorScheme = {
  Monochromatic: "monochromatic",
} as const;

export const Platform = {
  GitHub: "github",
  LinkedIn: "linkedin",
} as const;

export const Schedule = {
  FullTime: "full-time",
  PartTime: "part-time",
} as const;

export const SoftwareRole = {
  Contributor: "contributor",
  FormerMember: "former-member",
  Leader: "leader",
  Member: "member",
  Owner: "owner",
} as const;

export const SoftwareType = {
  Application: "application",
  CICD: "ci-cd",
  ComponentLibrary: "component-library",
  ContentManagementSystem: "content-management-system",
  Collaboration: "collaboration",
  Database: "database",
  Framework: "framework",
  Game: "game",
  Language: "language",
  LargeLanguageModel: "large-language-model",
  Library: "library",
  PackageManagement: "package-management",
  Runtime: "runtime",
  StateManagement: "state-management",
  StylingSolution: "styling-solution",
  TestingLibrary: "testing-library",
  Tool: "tool",
  VersionControl: "version-control",
} as const;
