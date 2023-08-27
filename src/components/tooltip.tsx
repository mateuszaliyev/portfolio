"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import { Content, Provider, Root } from "@radix-ui/react-tooltip";
import { cx } from "cva";

export {
  Provider as TooltipProvider,
  Trigger as TooltipTrigger,
} from "@radix-ui/react-tooltip";

export type TooltipContentProps = ComponentPropsWithoutRef<typeof Content>;

export type TooltipProps = Pick<
  ComponentPropsWithoutRef<typeof Provider>,
  "skipDelayDuration"
> &
  ComponentPropsWithoutRef<typeof Root>;

export const TooltipContent = forwardRef<
  ElementRef<typeof Content>,
  TooltipContentProps
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    className={cx(
      "z-tooltip overflow-hidden rounded-md border bg-white px-3 py-1.5 text-sm text-gray-900 shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",
      className,
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  />
));

export const Tooltip = ({
  delayDuration = 300,
  skipDelayDuration,
  ...props
}: TooltipProps) => (
  <Provider skipDelayDuration={skipDelayDuration}>
    <Root delayDuration={delayDuration} {...props} />
  </Provider>
);

TooltipContent.displayName = "TooltipContent";
