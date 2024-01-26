import type { ReactNode } from "react";

import type { Metadata, Viewport } from "next";

import { BalancerProvider } from "@/components/balancer/provider";
import { Footer } from "@/components/footer";
import { Parallax } from "@/components/parallax";

import { jost } from "@/constants/fonts";

import { environment } from "@/environment.mjs";

import { cx } from "@/utilities/classname";

import "./style.css";

import { GradientCyanSkyBlue } from "@/components/gradient/cyan-sky-blue";

type RootLayoutProps = {
  children: ReactNode;
};

const description: Metadata["description"] =
  "Frontend developer based in Poland";

const title: Metadata["title"] = {
  default: "Mateusz Aliyev",
  template: "%s | Mateusz Aliyev",
};

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description,
  metadataBase: new URL(environment.NEXT_PUBLIC_BASE_URL),
  openGraph: {
    description,
    locale: "en_US",
    siteName: "Mateusz Aliyev",
    title,
    type: "website",
    url: "/",
  },
  robots: {
    follow: false,
    googleBot: {
      follow: false,
      index: false,
      indexifembedded: false,
      "max-image-preview": "none",
      noarchive: true,
      nocache: true,
      noimageindex: true,
      nositelinkssearchbox: true,
      nosnippet: true,
      notranslate: true,
    },
    index: false,
    indexifembedded: false,
    "max-image-preview": "none",
    noarchive: true,
    nocache: true,
    noimageindex: true,
    nositelinkssearchbox: true,
    nosnippet: true,
    notranslate: true,
  },
  title,
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className={cx("scroll-smooth", jost.variable)} lang="en">
    <body className="bg-white text-gray-700 antialiased">
      <BalancerProvider>
        <Parallax>
          {children}
          <Footer />
        </Parallax>
        <svg
          aria-hidden
          className="h-0 w-0"
          viewBox="0 0 1 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <GradientCyanSkyBlue id="gradient-cyan-sky-blue" />
          </defs>
        </svg>
      </BalancerProvider>
    </body>
  </html>
);

export default RootLayout;
