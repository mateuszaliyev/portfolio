import type { Metadata } from "next";

import { ChopTheBillLogomark } from "@/components/chopthebill/logomark";
import { Project } from "@/components/project";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description = "Cost sharing made easy.";
const title = "ChopTheBill";

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
};

const ChopTheBillPage = () => (
  <Project
    logo={ChopTheBillLogomark}
    name="ChopTheBill"
    repository={`${environment.NEXT_PUBLIC_GITHUB_URL}/chopthebill`}
  >
    <Content />
  </Project>
);

export default ChopTheBillPage;
