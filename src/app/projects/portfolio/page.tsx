import type { Metadata } from "next";

import { Logo } from "@/components/logo";
import { Project } from "@/components/project";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Portfolio",
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
