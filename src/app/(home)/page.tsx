import { jost } from "@/constants/fonts";

import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Technologies } from "./technologies";
import { Timeline } from "./timeline";
import { Work } from "./work";

const HomePage = () => (
  <>
    <Hero />
    <main className="bg-white">
      <About />
      <Technologies font={jost.style.fontFamily.split("'")[1]} />
      <Timeline />
      <Work />
      <Contact />
    </main>
  </>
);

export default HomePage;
