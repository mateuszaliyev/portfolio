import { forwardRef, type SVGProps } from "react";

export type LogoPathProps = Omit<SVGProps<SVGPathElement>, "d">;

export const LogoPath = forwardRef<SVGPathElement, LogoPathProps>(
  (props, ref) => (
    <path
      d="M12 2.248 5.616 21.753 1.61 9.535 12 17.115l10.389-7.58-4.005 12.218z"
      ref={ref}
      {...props}
    />
  ),
);
