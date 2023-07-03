import type { SVGProps } from "react";

import { LogoPath } from "./path";

export type LogoProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "xmlns">;

export const Logo = ({
  children,
  fill = "none",
  stroke = "currentColor",
  strokeWidth = 1.4,
  ...props
}: LogoProps) => (
  <svg
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
    <LogoPath />
  </svg>
);
