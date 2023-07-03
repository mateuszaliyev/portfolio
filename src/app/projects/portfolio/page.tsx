import type { Metadata } from "next";

import { Logo } from "@/components/logo";
import { Project } from "@/components/project";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description = "My personal portfolio.";
const title = "Portfolio";

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
};

const PortfolioPage = () => (
  <Project
    logo={Logo}
    name="mata.li"
    repository={`${environment.NEXT_PUBLIC_GITHUB_URL}/portfolio`}
    website="https://mata.li/"
  >
    <Content />
  </Project>
);

export default PortfolioPage;
