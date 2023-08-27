import { Balancer } from "@/components/balancer";
import { Container } from "@/components/container";

export const About = () => (
  <section className="relative bg-gradient-section py-20" id="about">
    <Container>
      <p className="max-w-prose text-center text-2xl lg:text-3xl xl:text-4xl">
        <Balancer>
          As a web developer passionate about frontend, I strive to solve
          problems in simple, performant, cost-effective and scalable ways while
          delivering the best user experience. I am a strong advocate for modern
          development architecture who keeps up-to-date with latest releases and
          cutting-edge technologies.
        </Balancer>
      </p>
    </Container>
  </section>
);
