import { Balancer } from "@/components/balancer";
import { Container } from "@/components/container";

export const About = () => (
  <section className="relative bg-gradient-section py-20" id="about">
    <Container>
      <p className="text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
        <Balancer preferNative={false}>
          I strive to solve problems in simple, performant, cost-effective and
          scalable ways while delivering the best user experience. I am a strong
          advocate for modern development architecture who keeps up-to-date with
          latest releases and cutting-edge technologies.
        </Balancer>
      </p>
    </Container>
  </section>
);
