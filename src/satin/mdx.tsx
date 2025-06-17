import { Suspense, type SuspenseProps } from "react";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote-client/rsc";

import remarkGfm from "remark-gfm";

import {
  ArticleCode,
  ArticleDeck,
  ArticleLink,
  ArticleQuote,
  ArticleQuoteCaption,
  ArticleQuoteContent,
} from "@/satin/article";

export interface MdxProps
  extends MDXRemoteProps,
    Pick<SuspenseProps, "fallback"> {}

export const Mdx = ({
  components,
  fallback,
  options: {
    mdxOptions: { remarkPlugins, ...mdxOptions } = {},
    ...options
  } = {},
  ...props
}: MdxProps) => (
  <Suspense fallback={fallback}>
    <MDXRemote
      components={{
        a: ArticleLink,
        code: ArticleCode,
        Deck: ArticleDeck,
        Quote: ArticleQuote,
        QuoteCaption: ArticleQuoteCaption,
        QuoteContent: ArticleQuoteContent,
        ...components,
      }}
      options={{
        ...options,
        mdxOptions: {
          ...mdxOptions,
          remarkPlugins: [remarkGfm, ...(remarkPlugins ?? [])],
        },
      }}
      {...props}
    />
  </Suspense>
);
