import type { Metadata } from "next";

import { Project } from "@/components/project";
import { TokiLogomark } from "@/components/toki/logomark";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description = "Minimalist count up timer";
const title = "Toki";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description,
  metadataBase: new URL("/projects/toki", environment.NEXT_PUBLIC_BASE_URL),
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

const TokiPage = () => (
  <Project
    logo={TokiLogomark}
    name="Toki"
    repository="/github/toki"
    website="https://toki.mata.li/"
  >
    <Content />
  </Project>
);

export default TokiPage;
