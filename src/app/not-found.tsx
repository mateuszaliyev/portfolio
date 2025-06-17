import { Button, ButtonTruncate } from "@/satin/button";
import {
  IconHero,
  IconHeroButtons,
  IconHeroContent,
  IconHeroDeck,
  IconHeroGrid,
  IconHeroHeading,
  IconHeroIcon,
} from "@/satin/hero/icon";
import { Link } from "@/satin/link";
import { Main } from "@/satin/page";
import { Heading } from "@/satin/typography";

import { paths } from "@/utilities/url";

const NotFoundPage = () => (
  <Main padding="header">
    <IconHero>
      <IconHeroGrid>
        <IconHeroIcon>
          <Heading level={3}>404</Heading>
        </IconHeroIcon>
      </IconHeroGrid>
      <IconHeroContent>
        <IconHeroHeading>Not Found</IconHeroHeading>
        <IconHeroDeck>
          The page you are trying to access does not exist.
        </IconHeroDeck>
        <IconHeroButtons>
          <Button asChild glow shine size="lg">
            <Link href={paths.home()}>
              <ButtonTruncate>Return home</ButtonTruncate>
            </Link>
          </Button>
        </IconHeroButtons>
      </IconHeroContent>
    </IconHero>
  </Main>
);

export default NotFoundPage;
