import { Balancer } from "@/components/balancer";
import { Container } from "@/components/container";
import { CursorMask } from "@/components/cursor-mask";
import { ParallaxLines } from "@/components/parallax-lines";

export const Hero = () => (
  <ParallaxLines>
    <Container
      className="absolute inset-0 flex grow select-none flex-col justify-end gap-4 pb-20"
      size="large"
    >
      <h1 className="relative inline-flex text-6xl sm:text-9xl">
        <span className="absolute inline-flex flex-col py-2">
          <span className="text-gray-300">Mateusz</span>
          <span className="text-gray-400">Aliyev</span>
        </span>
        <CursorMask
          aria-hidden
          className="relative inline-flex flex-col bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 bg-clip-text py-2 text-transparent"
        >
          <span>Mateusz</span>
          <span>Aliyev</span>
        </CursorMask>
      </h1>
      <p className="max-w-xs text-2xl text-gray-500 sm:max-w-screen-sm sm:text-5xl">
        <Balancer>Frontend developer based in Poland</Balancer>
      </p>
    </Container>
  </ParallaxLines>
);
