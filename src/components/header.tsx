"use client";

import { Fragment, useEffect, useState, type HTMLAttributes } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { cx } from "cva";

import { Container } from "@/components/container";
import { GradientCyanSkyBlue } from "@/components/gradient/cyan-sky-blue";
import { Link, type LinkProps } from "@/components/link";
import { LinkExternalIcon } from "@/components/link/external-icon";
import { Logo } from "@/components/logo";

import { environment } from "@/environment.mjs";

import { useMediaQuery } from "@/hooks/media-query";

export type HeaderProps = Omit<HTMLAttributes<HTMLElement>, "children">;

const NAVIGATION_LINKS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "GitHub",
    url: environment.NEXT_PUBLIC_GITHUB_URL,
  },
  {
    name: "LinkedIn",
    url: environment.NEXT_PUBLIC_LINKEDIN_URL,
  },
] satisfies {
  name: string;
  url: LinkProps["href"];
}[];

export const Header = ({ className, ...props }: HeaderProps) => {
  const [active, setActive] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [open, setOpen] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  const minWidth640 = useMediaQuery("(min-width: 640px)");
  const pointerFine = useMediaQuery("(pointer: fine)");

  useEffect(() => {
    const scrollable = document.querySelector("body > div");

    if (!scrollable) return;

    const handleScroll = () => {
      setScrollTop(scrollable.scrollTop);
    };

    scrollable.addEventListener("scroll", handleScroll);

    return () => {
      scrollable.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    addEventListener("resize", handleResize);

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={cx(
          "fixed left-0 right-0 top-0 z-header border-b border-gray-200 bg-white transition 2xl:pointer-events-none 2xl:border-transparent 2xl:bg-opacity-0 2xl:backdrop-filter-none",
          viewportHeight < scrollTop
            ? "border-opacity-100 bg-opacity-80 backdrop-blur-sm backdrop-saturate-[1.8]"
            : "border-opacity-0 bg-opacity-0",
          className,
        )}
        {...props}
      >
        <Container
          className="flex h-16 items-center justify-between gap-4 py-3 sm:h-20 sm:py-4"
          size="large"
        >
          <Link className="pointer-events-auto h-full" href="/">
            <Logo className="h-full" stroke="url(#gradient-cyan-sky-blue)">
              <defs>
                <GradientCyanSkyBlue id="gradient-cyan-sky-blue" />
              </defs>
            </Logo>
          </Link>
          <button
            className="pointer-events-auto flex w-12 cursor-pointer flex-col items-end justify-center gap-1 outline-none focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-sky-500"
            onClick={() => {
              setOpen(true);
            }}
          >
            <span className="sr-only">Open menu</span>
            <span className="block h-1 w-2/3 rounded-b-full bg-gradient-to-b from-cyan-400 to-sky-500" />
            <span className="block h-1 w-full rounded-t-full bg-gradient-to-b from-sky-500 to-blue-600" />
          </button>
        </Container>
      </header>
      <Transition as={Fragment} show={open}>
        <Dialog
          className="fixed inset-0 z-menu"
          onClose={() => {
            setOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in"
            enterFrom="scale-0"
            enterTo="scale-100"
            leaveFrom="scale-100"
            leaveTo="scale-0"
          >
            <div
              aria-hidden
              className="fixed right-10 top-8 h-[calc(200vh+200vw)] w-[calc(200vh+200vw)] -translate-y-1/2 translate-x-1/2 scale-0 rounded-full bg-blue-600 transition-all duration-500 sm:top-10 xl:right-24"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition delay-300 duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="absolute inset-0 flex flex-col justify-center">
              <Container
                className="absolute left-0 right-0 top-0 flex h-16 items-center justify-between gap-4 py-3 sm:h-20 sm:py-4"
                size="large"
              >
                <Logo className="h-full" stroke="#fff" />
                <button
                  className="relative h-8 w-8 cursor-pointer gap-1 outline-none focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <span className="sr-only">Close menu</span>
                  <span className="absolute left-1/2 top-1/2 block h-1 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
                  <span className="absolute left-1/2 top-1/2 block h-1 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                </button>
              </Container>
              <nav className="relative">
                {pointerFine && (
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 top-0 block h-16 bg-black bg-opacity-10 transition duration-500 sm:h-24"
                    style={{
                      transform: `translateY(${
                        active * (minWidth640 ? 96 : 64)
                      }px)`,
                    }}
                  />
                )}
                <ul className="flex grow flex-col text-4xl text-white sm:text-6xl">
                  {NAVIGATION_LINKS.map(({ name, url }, index) => (
                    <li
                      className="flex h-16 justify-center sm:h-24"
                      key={index}
                    >
                      <Link
                        className={cx(
                          "relative inline-flex items-center outline-none",
                          index === 0 && "text-white",
                          url.startsWith("https") && "translate-x-[0.25em]",
                        )}
                        href={url}
                        onClick={() => {
                          setOpen(false);
                        }}
                        onFocus={() => {
                          setActive(index);
                        }}
                        onMouseEnter={() => {
                          setActive(index);
                        }}
                        target={url.startsWith("https") ? "_blank" : undefined}
                      >
                        {name}
                        {url.startsWith("https") && <LinkExternalIcon />}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
