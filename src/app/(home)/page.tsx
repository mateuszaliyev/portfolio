import { About } from "./about";
import { Contact } from "./contact";
import { Hero } from "./hero";
import { Timeline } from "./timeline";
import { Work } from "./work";

const HomePage = () => (
  <>
    <Hero />
    <main>
      <About />
      <Timeline />
      <Work />
      <Contact />
    </main>
  </>
);

export default HomePage;
