export const ChevronIcon = ({
  "aria-hidden": ariaHidden = true,
  fill = "none",
  stroke = "currentColor",
  strokeLinecap = "round",
  strokeLinejoin = "round",
  strokeWidth = "1.5",
  viewBox = "0 0 16 16",
  xmlns = "http://www.w3.org/2000/svg",
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    aria-hidden={ariaHidden}
    fill={fill}
    stroke={stroke}
    strokeLinecap={strokeLinecap}
    strokeLinejoin={strokeLinejoin}
    strokeWidth={strokeWidth}
    viewBox={viewBox}
    xmlns={xmlns}
    {...props}
  >
    <path d="m4 10 4-4 4 4" />
  </svg>
);
