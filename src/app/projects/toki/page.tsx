import type { Metadata } from "next";

import { Project } from "@/components/project";
import { TokiLogomark } from "@/components/toki/logomark";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description = "Minimalist count up timer.";
const title = "Toki";

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
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
