import type { Metadata } from "next";

import { Project } from "@/components/project";
import { SpaceTagLogomark } from "@/components/spacetag/logomark";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

export const metadata: Metadata = {
  title: "SpaceTag",
};

const SpaceTagPage = () => (
  <Project
    logo={SpaceTagLogomark}
    name="SpaceTag"
    repository={`${environment.NEXT_PUBLIC_GITHUB_URL}/spacetag`}
    website="https://spacetag.skni.edu.pl/"
  >
    <Content />
  </Project>
);

export default SpaceTagPage;
