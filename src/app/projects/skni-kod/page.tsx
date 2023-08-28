import type { Metadata } from "next";

import { Project } from "@/components/project";
import { SkniKodLogomark } from "@/components/skni-kod/logomark";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description =
  "Student Research Group of Computer Science &mdash; ‘Code’ website";
const title = "SKNI Kod";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description,
  metadataBase: new URL("/projects/skni-kod", environment.NEXT_PUBLIC_BASE_URL),
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

const SkniKodPage = () => (
  <Project
    logo={SkniKodLogomark}
    name="SKNI Kod"
    repository="/github/skni-kod"
    website="https://kod.mata.li/"
  >
    <Content />
  </Project>
);

export default SkniKodPage;
