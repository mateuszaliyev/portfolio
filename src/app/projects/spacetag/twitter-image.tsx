import { OpenGraphImage } from "@/components/image/open-graph";

import { createImageResponse } from "@/utilities/image-response";

export const alt = "3D satellite tracking tool.";
export const contentType = "image/png";
export const runtime = "edge";
export const size = {
  height: 900,
  width: 1600,
};

const Image = async () =>
  await createImageResponse(
    <OpenGraphImage title="SpaceTag">
      <svg
        fill="#cbd5e1"
        height="384"
        viewBox="0 0 27.82 26.457"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.229 0A13.229 13.229 0 0 0 0 13.229a13.229 13.229 0 0 0 13.229 13.229 13.229 13.229 0 0 0 1.324-.074A13.229 13.229 0 0 1 2.647 13.232 13.229 13.229 0 0 1 14.59.072a13.229 13.229 0 0 0-1.361-.07zm4.008 6.615a2.646 2.646 0 0 0-2.645 2.645v2.646a2.646 2.646 0 0 0 2.645 2.647h7.94v2.644h-7.94a2.646 2.646 0 0 0-2.645 2.647h10.582a2.646 2.646 0 0 0 2.647-2.647v-2.644a2.646 2.646 0 0 0-2.647-2.647h-7.937V9.26h7.937a2.646 2.646 0 0 0 2.647-2.645z" />
      </svg>
    </OpenGraphImage>,
    size,
  );

export default Image;
