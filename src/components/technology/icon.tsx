import type { LiHTMLAttributes } from "react";

import { cx } from "cva";

import { Link } from "@/components/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";

export type TechnologyIconProps = LiHTMLAttributes<HTMLLIElement> & {
  href?: `https://${string}`;
  logo: string;
  name: string;
};

export const TechnologyIcon = ({
  className,
  href,
  logo,
  name,
  ...props
}: TechnologyIconProps) => (
  <Tooltip>
    <TooltipContent>{name}</TooltipContent>
    <TooltipTrigger asChild>
      <li className={cx("h-6 w-6", className)} {...props}>
        {/* eslint-disable @next/next/no-img-element */}
        {href ? (
          <Link className="outline-none" href={href} target="_blank">
            <img
              alt={name}
              className="h-full w-full"
              loading="lazy"
              src={`/assets/images/logo/${logo}.svg`}
            />
          </Link>
        ) : (
          <img
            alt={name}
            className="h-full w-full"
            loading="lazy"
            src={`/assets/images/logo/${logo}.svg`}
          />
        )}
        {/* eslint-enable @next/next/no-img-element */}
      </li>
    </TooltipTrigger>
  </Tooltip>
);
