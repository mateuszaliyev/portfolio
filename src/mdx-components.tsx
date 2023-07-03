import type { MDXComponents } from "mdx/types";

import { LinkInline, type LinkInlineProps } from "@/components/link/inline";

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  ...components,
  a: (props) => (
    <LinkInline
      target={props.href?.startsWith("https://") ? "_blank" : undefined}
      {...(props as LinkInlineProps<unknown>)}
    />
  ),
});
