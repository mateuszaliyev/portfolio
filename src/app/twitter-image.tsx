import { OpenGraphImage } from "@/components/image/open-graph";

import { createImageResponse } from "@/utilities/image-response";

export const alt = "Frontend developer based in Poland.";
export const contentType = "image/png";
export const runtime = "edge";
export const size = {
  height: 900,
  width: 1600,
};

const Image = async () =>
  await createImageResponse(
    <OpenGraphImage
      title={
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              color: "#cbd5e1",
            }}
          >
            Mateusz
          </div>
          <div>Aliyev</div>
        </div>
      }
    />,
    size
  );

export default Image;
