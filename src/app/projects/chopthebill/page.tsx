import type { Metadata } from "next";

import { ChopTheBillLogomark } from "@/components/chopthebill/logomark";
import { Project } from "@/components/project";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description = "Cost sharing made easy";
const title = "ChopTheBill";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description,
  metadataBase: new URL(
    "/projects/chopthebill",
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

const ChopTheBillPage = () => (
  <Project
    logo={ChopTheBillLogomark}
    name="ChopTheBill"
    repository="/github/chopthebill"
  >
    <Content />
  </Project>
);

export default ChopTheBillPage;
