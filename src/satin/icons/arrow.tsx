export const ArrowDiagonalIcon = ({
  "aria-hidden": ariaHidden = true,
  fill = "currentColor",
  viewBox = "0 0 16 16",
  xmlns = "http://www.w3.org/2000/svg",
  ...props
}: React.ComponentProps<"svg">) => (
  <svg
    aria-hidden={ariaHidden}
    fill={fill}
    viewBox={viewBox}
    xmlns={xmlns}
    {...props}
  >
    <path d="M7.184 3.894a.75.75 0 0 0-.136 1.494l2.295.209-4.879 4.878a.75.75 0 0 0 1.061 1.06l4.878-4.878.209 2.295a.75.75 0 1 0 1.494-.136l-.354-3.89a.75.75 0 0 0-.679-.678l-3.889-.354Z" />
  </svg>
);
