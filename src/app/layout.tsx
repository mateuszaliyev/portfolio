import "@/satin/style.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Access, Logo, LogoColorScheme, Platform } from "@/constants";

import { Body } from "@/satin/body";
import { Button } from "@/satin/button";
import {
  Footer,
  FooterContainer,
  FooterLink,
  FooterLogo,
  FooterSection,
  PreFooter,
  PreFooterContainer,
} from "@/satin/footer";
import { Header, HeaderContainer } from "@/satin/header";
import { Html } from "@/satin/html";
import { PlatformIcon } from "@/satin/icons/platform";
import { Link } from "@/satin/link";
import {
  NavigationMenu,
  NavigationMenuDropdown,
  NavigationMenuDropdownContent,
  NavigationMenuDropdownItem,
  NavigationMenuDropdownItemTrigger,
  NavigationMenuDropdownList,
  NavigationMenuDropdownTrigger,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuLogo,
  NavigationMenuSocialItem,
  NavigationMenuSocialLink,
  NavigationMenuSocialList,
  NavigationMenuTrigger,
} from "@/satin/navigation/menu";

import { api } from "@/server/api";
import { parseEmploymentsFromPersonEntities } from "@/server/utilities/employment";

import { createLogoPicker, logoImageProps } from "@/utilities/logo";
import { index } from "@/utilities/metadata";
import { getPlatformIfProfile, paths } from "@/utilities/url";

const pickLogo = createLogoPicker({
  order: {
    colorScheme: [LogoColorScheme.Monochromatic],
    type: [Logo.Mark, Logo.MarkContained, Logo.Lockup, Logo.Type],
  },
});

export const generateMetadata = async (): Promise<Metadata> => {
  const [person, software] = await Promise.all([
    api.people.getByEnvironmentVariable(),
    api.software.getByEnvironmentVariable(),
  ]);

  if (!person || !software) return notFound();

  return {
    description: software.data.home.hero.heading,
    robots: index(false),
    title: { default: person.name, template: `%s | ${person.name}` },
  };
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const [person, software] = await Promise.all([
    api.people.getByEnvironmentVariable(),
    api.software.getByEnvironmentVariable(),
  ]);

  if (!person || !software) return null;

  const employments = parseEmploymentsFromPersonEntities(person.entities);

  const links = person.links
    ?.map((link) => ({
      ...link,
      platform: getPlatformIfProfile(link.url),
    }))
    .filter(
      (link) =>
        link.access === Access.Public && typeof link.platform !== "undefined",
    )
    .sort((a, z) => a.platform!.localeCompare(z.platform!));

  const linkedIn = links?.find((link) => link.platform === Platform.LinkedIn);

  const logo = pickLogo(software.logos.map(({ logo }) => logo));

  return (
    <Html lang="en">
      <Body>
        <Header>
          <HeaderContainer>
            <NavigationMenu>
              <NavigationMenuDropdown>
                <NavigationMenuList>
                  {logo && (
                    <NavigationMenuItem>
                      <NavigationMenuTrigger asChild className="px-2">
                        <NavigationMenuLink href={paths.home()}>
                          <NavigationMenuLogo {...logoImageProps(logo)} />
                          <span className="sr-only">Homepage</span>
                        </NavigationMenuLink>
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                  )}
                  <NavigationMenuItem className="max-sm:hidden">
                    <NavigationMenuTrigger asChild>
                      <NavigationMenuLink href="/#experience">
                        Experience
                      </NavigationMenuLink>
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="max-sm:hidden">
                    <NavigationMenuTrigger asChild>
                      <NavigationMenuLink href="/#education">
                        Education
                      </NavigationMenuLink>
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="max-sm:hidden">
                    <NavigationMenuTrigger asChild>
                      <NavigationMenuLink href="/#projects">
                        Projects
                      </NavigationMenuLink>
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="max-sm:hidden">
                    <NavigationMenuTrigger asChild>
                      <NavigationMenuLink href="/#stack">
                        Stack
                      </NavigationMenuLink>
                    </NavigationMenuTrigger>
                  </NavigationMenuItem>
                  {links?.map((link, index) => (
                    <NavigationMenuItem className="max-sm:hidden" key={index}>
                      <NavigationMenuTrigger asChild>
                        <NavigationMenuLink href={link.url} target="_blank">
                          {link.description}
                        </NavigationMenuLink>
                      </NavigationMenuTrigger>
                    </NavigationMenuItem>
                  ))}
                  <NavigationMenuItem className="sm:hidden">
                    <NavigationMenuDropdownTrigger />
                  </NavigationMenuItem>
                </NavigationMenuList>
                <NavigationMenuDropdownContent height="full">
                  <NavigationMenuDropdownList>
                    <NavigationMenuDropdownItem>
                      <NavigationMenuDropdownItemTrigger asChild>
                        <NavigationMenuLink href="/#experience">
                          Experience
                        </NavigationMenuLink>
                      </NavigationMenuDropdownItemTrigger>
                    </NavigationMenuDropdownItem>
                    <NavigationMenuDropdownItem>
                      <NavigationMenuDropdownItemTrigger asChild>
                        <NavigationMenuLink href="/#education">
                          Education
                        </NavigationMenuLink>
                      </NavigationMenuDropdownItemTrigger>
                    </NavigationMenuDropdownItem>
                    <NavigationMenuDropdownItem>
                      <NavigationMenuDropdownItemTrigger asChild>
                        <NavigationMenuLink href="/#stack">
                          Stack
                        </NavigationMenuLink>
                      </NavigationMenuDropdownItemTrigger>
                    </NavigationMenuDropdownItem>
                    <NavigationMenuDropdownItem>
                      <NavigationMenuDropdownItemTrigger>
                        Projects
                      </NavigationMenuDropdownItemTrigger>
                    </NavigationMenuDropdownItem>
                  </NavigationMenuDropdownList>
                  {links && (
                    <NavigationMenuSocialList className="mt-auto">
                      {links.map((link, index) => (
                        <NavigationMenuSocialItem key={index}>
                          <NavigationMenuSocialLink
                            href={link.url}
                            target="_blank"
                          >
                            <span className="sr-only">{link.description}</span>
                            <PlatformIcon platform={link.platform!} />
                          </NavigationMenuSocialLink>
                        </NavigationMenuSocialItem>
                      ))}
                    </NavigationMenuSocialList>
                  )}
                </NavigationMenuDropdownContent>
              </NavigationMenuDropdown>
            </NavigationMenu>
          </HeaderContainer>
        </Header>
        {children}
        <PreFooter id="get-in-touch">
          <PreFooterContainer className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <h2 className="xs:text-4xl text-3xl leading-[1.1] font-medium tracking-tight text-balance text-white">
              Want to work together?
              <br />
              Get in touch.
            </h2>
            <div className="flex items-center gap-2">
              {person.email && (
                <Button asChild shine size="lg">
                  <Link href={`mailto:${person.email}`}>Email</Link>
                </Button>
              )}
              {linkedIn && (
                <Button asChild color="secondary" size="lg">
                  <Link href={linkedIn.url} target="_blank">
                    {linkedIn.description}
                  </Link>
                </Button>
              )}
            </div>
          </PreFooterContainer>
        </PreFooter>
        <Footer>
          <FooterContainer>
            <FooterSection className="col-span-full flex flex-wrap items-center justify-between gap-6">
              <FooterLink
                className="flex items-center gap-2"
                href={paths.home()}
              >
                {logo && <FooterLogo {...logoImageProps(logo)} />}
                <span className="mt-0.5 whitespace-nowrap">
                  {person.name}
                  <span className="max-xs:sr-only">
                    {" "}
                    &mdash; {employments[0]?.position}
                  </span>
                </span>
              </FooterLink>
              {links && links.length > 0 && (
                <ul className="flex items-center gap-6">
                  {links.map((link, index) => (
                    <li key={index}>
                      <FooterLink href={link.url} target="_blank">
                        <span className="sr-only">{link.description}</span>
                        <PlatformIcon
                          className="size-4.5"
                          platform={link.platform!}
                        />
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              )}
            </FooterSection>
          </FooterContainer>
        </Footer>
      </Body>
    </Html>
  );
};

export default Layout;
