export const isExternal = (url: string) =>
  url.startsWith("/github") ||
  url.startsWith("/linkedin") ||
  url.startsWith("https://");
