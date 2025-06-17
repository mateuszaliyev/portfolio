import { notFound } from "next/navigation";

import { ContentType, Logo } from "@/constants";

import { api } from "@/server/api";

import { createLogoPicker } from "@/utilities/logo";

export const contentType = ContentType.Svg;

const pickLogo = createLogoPicker({
  order: { type: [Logo.MarkContained, Logo.Mark] },
});

const Icon = async () => {
  const software = await api.software.getByEnvironmentVariable();

  if (!software) return notFound();

  const logo = pickLogo(software.logos.map(({ logo }) => logo));

  if (logo?.contentType !== ContentType.Svg) return notFound();

  const svgElementIndex = logo.content.indexOf("<svg ");

  return new Response(
    logo.content.slice(svgElementIndex, 5) +
      'style="color:#fff" ' +
      logo.content.slice(svgElementIndex + 5),
    { headers: { "Content-Type": logo.contentType } },
  );
};

export default Icon;
