import { OpenGraphImage } from "@/components/image/open-graph";

import { createImageResponse } from "@/utilities/image-response";

export const alt = "My personal portfolio.";
export const contentType = "image/png";
export const runtime = "edge";
export const size = {
  height: 900,
  width: 1600,
};

const Image = async () =>
  await createImageResponse(
    <OpenGraphImage title="mata.li">
      <svg
        fill="none"
        height="384"
        stroke="#cbd5e1"
        strokeWidth={1.4}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.248 5.616 21.753 1.61 9.535 12 17.115l10.389-7.58-4.005 12.218z" />
      </svg>
    </OpenGraphImage>,
    size
  );

export default Image;
