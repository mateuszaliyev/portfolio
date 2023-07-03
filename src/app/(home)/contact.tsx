import { Container } from "@/components/container";
import { LinkInline } from "@/components/link/inline";

import { environment } from "@/environment.mjs";

export const Contact = () => (
  <section className="bg-white py-40">
    <Container className="flex flex-col items-center justify-between gap-10 lg:flex-row">
      <h2 className="text-center text-3xl text-gray-400 sm:text-4xl lg:text-start">
        Want to work together?
        <br />
        Get in touch.
      </h2>
      <LinkInline
        className="whitespace-nowrap text-center text-2xl sm:text-3xl lg:text-start"
        href={`mailto:${environment.NEXT_PUBLIC_EMAIL_ADDRESS}`}
      >
        {environment.NEXT_PUBLIC_EMAIL_ADDRESS}
      </LinkInline>
    </Container>
  </section>
);
