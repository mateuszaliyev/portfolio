export const GitBranchIcon = ({
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
    <path d="M11.75 4.5V6A1.75 1.75 0 0 1 10 7.75H6A1.75 1.75 0 0 0 4.25 9.5v2-7" />
    <circle cx="4.25" cy="3.25" r="1.5" />
    <circle cx="4.25" cy="12.75" r="1.5" />
    <circle cx="11.75" cy="3.25" r="1.5" />
  </svg>
);
