import type { Metadata } from "next";

import { Project } from "@/components/project";
import { SkniKodLogomark } from "@/components/skni-kod/logomark";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description =
  "Student Research Group of Computer Science &mdash; ‘Code’ website.";
const title = "SKNI Kod";

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
};

const SkniKodPage = () => (
  <Project
    logo={SkniKodLogomark}
    name="SKNI Kod"
    repository={`${environment.NEXT_PUBLIC_GITHUB_URL}/skni-kod`}
    website="https://kod.mata.li/"
  >
    <Content />
  </Project>
);

export default SkniKodPage;
