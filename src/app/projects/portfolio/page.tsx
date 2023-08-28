import type { Metadata } from "next";

import { Logo } from "@/components/logo";
import { Project } from "@/components/project";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description = "My personal portfolio";
const title = "Portfolio";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description,
  metadataBase: new URL(
    "/projects/portfolio",
    environment.NEXT_PUBLIC_BASE_URL,
  ),
  openGraph: {
    description,
    locale: "en_US",
    siteName: "Mateusz Aliyev",
    title,
    type: "website",
    url: "/",
  },
  title,
};

const PortfolioPage = () => (
  <Project
    logo={Logo}
    name="mata.li"
    repository="/github/portfolio"
    website="https://mata.li/"
  >
    <Content />
  </Project>
);

export default PortfolioPage;
