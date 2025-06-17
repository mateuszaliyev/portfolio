import {
  Content,
  type CollapsibleContentProps,
} from "@radix-ui/react-collapsible";

import { cx } from "@/satin/classname";

export {
  Collapsible,
  CollapsibleTrigger,
  type CollapsibleContentProps,
  type CollapsibleTriggerProps,
} from "@radix-ui/react-collapsible";

export const CollapsibleContent = ({
  className,
  ...props
}: CollapsibleContentProps) => (
  <Content
    className={cx(
      "motion-safe:data-[state=closed]:animate-collapsible-out motion-safe:data-[state=open]:animate-collapsible-in overflow-y-hidden will-change-[height]",
      className,
    )}
    {...props}
  />
);
