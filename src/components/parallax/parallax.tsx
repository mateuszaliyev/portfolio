"use client";

import { useEffect, useRef, type HTMLAttributes } from "react";

import { usePathname } from "next/navigation";

import { cx } from "@/utilities/classname";

export type ParallaxProps = HTMLAttributes<HTMLDivElement>;

export const Parallax = ({ className, ...props }: ParallaxProps) => {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={cx(
        "relative flex h-screen grow flex-col overflow-x-hidden [perspective:1px]",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
