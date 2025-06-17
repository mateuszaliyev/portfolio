import { cx } from "@/satin/classname";
import { Link } from "@/satin/link";
import { Slot, type AsChild } from "@/satin/slot";

export interface ArticleProps
  extends React.ComponentProps<"article">,
    AsChild {}

export interface ArticleDeckProps extends React.ComponentProps<"p">, AsChild {}

export const Article = ({ asChild, className, ...props }: ArticleProps) => {
  const Component = asChild ? Slot : "article";

  return (
    <Component
      className={cx(
        "prose prose-sm prose-li:marker:text-current sm:prose-base prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-balance dark:prose-invert mx-auto my-8 text-start sm:my-12",
        className,
      )}
      {...props}
    />
  );
};

export const ArticleCode = ({
  className,
  ...props
}: React.ComponentProps<"code">) => (
  <code
    className={cx(
      "rounded-[.3em] border border-gray-700 bg-gray-900 px-[.25em] py-[.1em] font-normal text-current before:content-[''] after:content-['']",
      className,
    )}
    {...props}
  />
);

export const ArticleDeck = ({
  asChild,
  className,
  ...props
}: ArticleDeckProps) => {
  const Component = asChild ? Slot : "p";

  return (
    <Component
      className={cx(
        "text-xl font-medium tracking-tight text-white sm:text-2xl",
        className,
      )}
      {...props}
    />
  );
};

export const ArticleLink = ({
  className,
  href = "#",
  ...props
}: React.ComponentProps<"a">) => (
  <Link
    className={cx(
      "hocus-visible:decoration-white hocus-visible:text-white font-normal underline decoration-gray-500 decoration-[clamp(.0625rem,.1em,.1875rem)] underline-offset-[clamp(.125rem,.225em,.375rem)] transition outline-none",
      className,
    )}
    href={href}
    target={href.startsWith("/") || href.startsWith("#") ? undefined : "_blank"}
    {...props}
  />
);

export const ArticleQuote = (props: React.ComponentProps<"figure">) => (
  <figure {...props} />
);

export const ArticleQuoteCaption = (
  props: React.ComponentProps<"figcaption">,
) => <figcaption {...props} />;

export const ArticleQuoteContent = ({
  className,
  ...props
}: React.ComponentProps<"blockquote">) => (
  <blockquote
    className={cx(
      "border-none !pl-0 indent-[-.5em] text-base font-medium tracking-tight not-italic before:content-[open-quote] after:content-[close-quote] sm:text-lg",
      className,
    )}
    {...props}
  />
);
