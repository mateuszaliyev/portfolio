import type { Metadata } from "next";

import { Project } from "@/components/project";
import { SpaceTagLogomark } from "@/components/spacetag/logomark";

import { environment } from "@/environment.mjs";

import Content from "./content.mdx";

const description = "3D satellite tracking tool.";
const title = "SpaceTag";

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    title,
  },
  title,
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
