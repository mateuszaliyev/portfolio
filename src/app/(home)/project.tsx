import type { ReactNode } from "react";

import { cx } from "cva";

import { Balancer } from "@/components/balancer";
import { Container } from "@/components/container";
import { Link, type LinkProps } from "@/components/link";

export type ProjectProps = {
  className?: string;
  description: string;
  href: LinkProps<unknown>["href"];
  logo: ReactNode;
  name: string;
};

export const Project = ({
  className,
  description,
  href,
  logo,
  name,
}: ProjectProps) => (
  <Link
    className={cx("group flex outline-none transition", className)}
    href={href}
  >
    <Container className="relative flex h-24 items-center justify-center gap-8 py-8 sm:justify-between lg:h-48 lg:py-16">
      <h3 className="h-full select-none">
        <span className="sr-only">{name}</span>
        {logo}
      </h3>
      <p className="hidden max-w-screen-md text-end text-xl text-gray-500 transition group-hover:text-white group-focus-visible:text-white sm:block lg:text-3xl">
        <Balancer>{description}</Balancer>
      </p>
    </Container>
  </Link>
);
