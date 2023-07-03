import type { Metadata } from "next";

import { Project } from "@/components/project";
import { TokiLogomark } from "@/components/toki/logomark";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "Toki",
};

const TokiPage = () => (
  <Project
    logo={TokiLogomark}
    name="Toki"
    repository={`${environment.NEXT_PUBLIC_GITHUB_URL}/toki`}
    website="https://toki.mata.li/"
  >
    <Content />
  </Project>
);

export default TokiPage;
