"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";

import { cx } from "cva";

export type CursorMaskProps = HTMLAttributes<HTMLSpanElement>;

const maskPositionDefaultValue = "-1000px -1000px";

export const CursorMask = ({
  className,
  onMouseLeave,
  style,
  ...props
}: CursorMaskProps) => {
  const [maskPosition, setMaskPosition] = useState(maskPositionDefaultValue);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      if (!ref.current) return;

      const { height, left, top, width } = ref.current.getBoundingClientRect();

      const x = clientX - left - 0.5 * width;
      const y = clientY - top - 0.5 * height;

      if (x < -1.3 * height || x > 1.3 * height || y < -height || y > height)
        return;

      setMaskPosition(
        `${clientX - left - 0.5 * width}px ${clientY - top - 0.5 * height}px`,
      );
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <span
      className={cx(
        "[mask-image:radial-gradient(circle_at_center,#000_40%,transparent_50%)] [mask-repeat:no-repeat]",
        className,
      )}
      onMouseLeave={(event) => {
        setMaskPosition(maskPositionDefaultValue);
        onMouseLeave?.(event);
      }}
      ref={ref}
      style={{ ...style, maskPosition, WebkitMaskPosition: maskPosition }}
      {...props}
    />
  );
};
