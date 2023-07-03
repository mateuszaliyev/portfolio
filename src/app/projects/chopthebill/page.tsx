import type { Metadata } from "next";

import { ChopTheBillLogomark } from "@/components/chopthebill/logomark";
import { Project } from "@/components/project";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "ChopTheBill",
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
