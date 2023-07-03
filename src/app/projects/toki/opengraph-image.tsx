import { OpenGraphImage } from "@/components/image/open-graph";

import { createImageResponse } from "@/utilities/image-response";

export const alt = "Toki | Mateusz Aliyev";
export const contentType = "image/png";
export const runtime = "edge";
export const size = {
  height: 900,
  width: 1600,
};

const Image = async () =>
  await createImageResponse(
    <OpenGraphImage title="Toki">
      <svg
        fill="#cbd5e1"
        height="384"
        viewBox="0 0 9.725 10.046"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 .91h2.915v8.102H2.15v-.537H.765v.806H0zm3.287 2.749h2.676v-1.51H3.7v-.723h2.263V0h.786v1.426h2.46v.724h-2.46v1.509h2.925v.723H3.287zm.206 2.087h3.969V4.671h.786v1.075h1.477v.724H8.248v2.274q0 1.302-1.272 1.302-.682 0-1.374-.02-.062-.404-.155-.89.795.083 1.354.083.661 0 .661-.734V6.47H3.493zM.765 7.751H2.15V5.023H.765zM2.15 1.633H.765V4.32H2.15zm1.684 5.54.6-.476q.744.817 1.281 1.488l-.661.507q-.59-.796-1.22-1.52z" />
      </svg>
    </OpenGraphImage>,
    size
  );

export default Image;
