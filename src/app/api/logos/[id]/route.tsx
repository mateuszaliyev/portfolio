import { notFound } from "next/navigation";

import { api } from "@/server/api";

export const dynamic = "force-static";

export const GET = async (
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) => {
  const logo = await api.logo.getById((await params).id);

  if (!logo) notFound();

  return new Response(logo.content, {
    headers: { "Content-Type": logo.contentType },
  });
};
