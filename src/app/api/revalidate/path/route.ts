import { revalidatePath } from "next/cache";
import type { NextRequest } from "next/server";

import { z } from "zod/v4";

import { environment } from "@/environment";

const schema = z.object({
  path: z.string().min(1),
  secret: z.string().min(1),
  type: z
    .literal(["layout", "page"])
    .nullish()
    .transform((value) => (value === null ? undefined : value)),
});

export const GET = (request: NextRequest) => {
  try {
    const secret = request.nextUrl.searchParams.get("secret");

    if (!secret) return new Response("401 Unauthorized", { status: 401 });

    const parameters = schema.safeParse({
      path: request.nextUrl.searchParams.get("path"),
      secret,
      type: request.nextUrl.searchParams.get("type"),
    });

    if (!parameters.success) {
      return new Response(
        `400 Bad Request\n\n${z.prettifyError(parameters.error)}`,
        { status: 400 },
      );
    }

    if (parameters.data.secret !== environment.REVALIDATE_SECRET) {
      return new Response("403 Forbidden", { status: 403 });
    }

    revalidatePath(parameters.data.path, parameters.data.type);

    return new Response("200 OK", { status: 200 });
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  } catch (error) {
    return new Response("500 Internal Server Error", { status: 500 });
  }
};
