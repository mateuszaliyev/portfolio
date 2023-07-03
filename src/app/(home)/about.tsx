import me from "@/assets/images/me.png";

import { Balancer } from "@/components/balancer";
import { Container } from "@/components/container";
import { Image } from "@/components/image";

import { Skills } from "./skills";

export const About = () => (
  <section className="relative bg-gradient-section py-20" id="about">
    <Container size="large">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex shrink-0 flex-col items-center md:self-end">
          <Image
            alt="Mateusz Aliyev"
            className="w-full max-w-xs brightness-125 grayscale lg:w-96"
            src={me}
          />
          <div
            aria-hidden
            className="flex w-full overflow-clip rounded-b-md md:hidden"
          >
            <div className="h-1 grow bg-gradient-to-r from-transparent via-gray-400 to-black" />
            <div className="h-1 w-full max-w-xs shrink-0 bg-black" />
            <div className="h-1 grow bg-gradient-to-r from-black via-gray-400 to-transparent" />
          </div>
        </div>
        <p className="text-2xl lg:text-3xl xl:text-4xl">
          <Balancer>
            As a web developer passionate about frontend, I strive to solve
            problems in simple, performant, cost-effective and scalable ways
            while delivering the best user experience. I am a strong advocate
            for modern development architecture who keeps up-to-date with latest
            releases and cutting-edge technologies.
          </Balancer>
        </p>
      </div>
      <div
        aria-hidden
        className="hidden h-1 w-full rounded-b-full bg-gradient-to-r from-gray-800 from-[320px] via-gray-400 to-gray-200 md:block"
      />
      <Skills />
    </Container>
  </section>
);
