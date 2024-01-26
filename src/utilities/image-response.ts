import { ImageResponse } from "next/og";

export const createImageResponse = async (
  element: ConstructorParameters<typeof ImageResponse>[0],
  size: Pick<
    NonNullable<ConstructorParameters<typeof ImageResponse>[1]>,
    "height" | "width"
  >,
) =>
  new ImageResponse(element, {
    ...size,
    fonts: [
      {
        data: await getImageResponseFont(),
        name: "Jost",
      },
    ],
  });

export const getImageResponseFont = async () => {
  const response = await fetch(
    new URL("../assets/fonts/jost-regular.ttf", import.meta.url),
  );
  return await response.arrayBuffer();
};
