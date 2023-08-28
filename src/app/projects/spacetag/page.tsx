import type { Metadata } from "next";

import { Project } from "@/components/project";
import { SpaceTagLogomark } from "@/components/spacetag/logomark";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description = "3D satellite tracking tool";
const title = "SpaceTag";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description,
  metadataBase: new URL("/projects/spacetag", environment.NEXT_PUBLIC_BASE_URL),
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

const SpaceTagPage = () => (
  <Project
    logo={SpaceTagLogomark}
    name="SpaceTag"
    repository="/github/spacetag"
    website="https://spacetag.skni.edu.pl/"
  >
    <Content />
  </Project>
);

export default SpaceTagPage;
