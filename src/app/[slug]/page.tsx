import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { EntityPage } from "@/app/[slug]/entity";
import { SoftwarePage } from "@/app/[slug]/software";

import { api } from "@/server/api";

import { formatSoftwareName } from "@/utilities/string";

type GetEntityOrSoftwareBySlugReturnType =
  | {
      entity: NonNullable<Awaited<ReturnType<typeof api.entity.getBySlug>>>;
      type: "entity";
    }
  | {
      software: NonNullable<Awaited<ReturnType<typeof api.software.getBySlug>>>;
      type: "software";
    };

type SlugPageParameters = { slug: string };

export const dynamic = "force-static";

const getEntityOrSoftwareBySlug = async (
  slug: string,
): Promise<GetEntityOrSoftwareBySlugReturnType | undefined> => {
  const [entity, software] = await Promise.allSettled([
    api.entity.getBySlug(slug),
    api.software.getBySlug(slug),
  ]);

  if (entity.status === "fulfilled" && entity.value) {
    return { entity: entity.value, type: "entity" };
  }

  if (software.status === "fulfilled" && software.value) {
    return { software: software.value, type: "software" };
  }
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<SlugPageParameters>;
}): Promise<Metadata> => {
  const { slug } = await params;

  const resource = await getEntityOrSoftwareBySlug(slug);

  if (!resource) notFound();

  if (resource.type === "entity") return { title: resource.entity.name };

  return { title: formatSoftwareName(resource.software) };
};

const SlugPage = async ({
  params,
}: {
  params: Promise<SlugPageParameters>;
}) => {
  const { slug } = await params;

  const resource = await getEntityOrSoftwareBySlug(slug);

  if (!resource) return notFound();

  if (resource.type === "entity")
    return <EntityPage entity={resource.entity} />;

  return <SoftwarePage software={resource.software} />;
};

export default SlugPage;
