import { OpenGraphImage } from "@/components/image/open-graph";

import { createImageResponse } from "@/utilities/image-response";

export const alt = "ChopTheBill | Mateusz Aliyev";
export const contentType = "image/png";
export const runtime = "edge";
export const size = {
  height: 900,
  width: 1600,
};

const Image = async () =>
  await createImageResponse(
    <OpenGraphImage title="ChopTheBill">
      <svg
        fill="#cbd5e1"
        height="384"
        viewBox="0 0 21.68 33.125"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m15.549 0-1.122 4.187a12.699 12.699 0 0 0-1.792-.119C5.646 4.104 0 9.779 0 16.768c0 5.212 3.174 9.835 7.906 11.761l-1.122 4.185 1.533.411 1.096-4.09.63-2.347.192-.72 4.93-18.4.794-2.961.028-.106L17.083.413zm1.945 5.008-.83 3.1a9.526 9.526 0 0 1 2.77 1.925l2.246-2.245a12.7 12.7 0 0 0-4.186-2.78zm-4.805 2.235h.01c.3 0 .6.015.898.043L8.735 25.43a9.526 9.526 0 0 1 3.954-18.186zm6.746 16.26a9.525 9.525 0 0 1-7.633 2.747l-.83 3.1a12.694 12.694 0 0 0 10.708-3.601z" />
      </svg>
    </OpenGraphImage>,
    size
  );

export default Image;
