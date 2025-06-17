import { ContentType, Platform } from "@/constants";

export const dataUrl = ({
  base64,
  content,
  contentType,
}: {
  base64?: boolean | "encode";
  content: string;
  contentType: ContentType;
}) =>
  `data:${contentType}${base64 ? `;base64` : ""},${encodeURIComponent(base64 === "encode" ? btoa(content) : content)}`;

export const dataUrlIfSvg = (
  parameters: Pick<Parameters<typeof dataUrl>[0], "content" | "contentType">,
) =>
  parameters.contentType === ContentType.Svg
    ? dataUrl(parameters)
    : parameters.content;

export const getPlatformIfProfile = (url: string | URL) => {
  url = typeof url === "string" ? new URL(url) : url;

  if (
    url.hostname === "github.com" &&
    url.pathname.slice(1).split("/").length === 1
  ) {
    return Platform.GitHub;
  }

  if (url.hostname === "linkedin.com") {
    const segments = url.pathname.slice(1).split("/");
    if (segments.length === 2 && segments[0] === "in") return Platform.LinkedIn;
  }
};

export const paths = {
  api: { logo: (id: string) => `/api/logos/${id}` },
  entity: (slug: string) => `/${slug}`,
  home: () => "/",
  software: (slug: string) => `/${slug}`,
};
