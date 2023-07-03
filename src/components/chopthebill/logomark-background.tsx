import type { SVGAttributes } from "react";

export type ChopTheBillLogomarkBackgroundProps = Omit<
  SVGAttributes<SVGSVGElement>,
  "children" | "fill" | "viewBox" | "xmlns"
>;

export const ChopTheBillLogomarkBackground = (
  props: ChopTheBillLogomarkBackgroundProps
) => (
  <svg
    viewBox="0 0 40.217 40.217"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="a" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#4caf50" />
        <stop offset="1" stopColor="#009688" />
      </linearGradient>
      <filter height="1.175" id="b" width="1.268" x="-.111" y="-.072">
        <feFlood floodOpacity=".2" />
        <feComposite in2="SourceGraphic" operator="in" />
        <feGaussianBlur stdDeviation="1" />
        <feOffset dx="1" dy="1" />
        <feComposite in="SourceGraphic" in2="offset" />
      </filter>
    </defs>
    <path
      d="M6.35 0h27.517a6.336 6.336 0 0 1 6.35 6.35v27.517a6.336 6.336 0 0 1-6.35 6.35H6.35A6.336 6.336 0 0 1 0 33.867V6.35A6.336 6.336 0 0 1 6.35 0z"
      fill="url(#a)"
    />
    <path
      d="m22.958 3.34-1.121 4.186c-5.31-.801-10.907 2.193-13.17 7.069-2.372 4.747-1.307 10.907 2.538 14.57l3.812 3.812-.825 3.076 4.163 4.164c5.388-.022 10.777.042 16.162-.033 3.346-.25 6-3.49 5.7-6.811V19.478L24.49 3.752l-1.533-.411z"
      fill="#000"
      opacity=".2"
    />
    <path
      d="m22.958 3.34-1.122 4.187a12.699 12.699 0 0 0-1.792-.119c-6.989.036-12.635 5.711-12.635 12.7 0 5.212 3.174 9.835 7.906 11.761l-1.122 4.185 1.533.411 1.096-4.09.63-2.347.192-.72 4.93-18.4.794-2.961.028-.106 1.096-4.088zm1.945 5.008-.83 3.1a9.526 9.526 0 0 1 2.77 1.925l2.246-2.245a12.7 12.7 0 0 0-4.186-2.78zm-4.805 2.235h.01c.3 0 .6.015.898.043L16.144 28.77a9.526 9.526 0 0 1 3.954-18.186zm6.746 16.26a9.525 9.525 0 0 1-7.633 2.747l-.83 3.1a12.694 12.694 0 0 0 10.708-3.601z"
      fill="#fff"
      filter="url(#b)"
    />
  </svg>
);
