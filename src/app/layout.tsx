import type { ReactNode } from "react";

import type { Metadata } from "next";

import { BalancerProvider } from "@/components/balancer/provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Parallax } from "@/components/parallax";

import { jost } from "@/constants/fonts";

import { environment } from "@/environment.mjs";

import { cx } from "@/utilities/classname";

import "./style.css";

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
  themeColor: "#000000",
  title,
  twitter: {
    card: "summary_large_image",
  },
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className={cx("scroll-smooth", jost.variable)} lang="en">
    <body className="bg-white text-gray-700 antialiased">
      <BalancerProvider>
        <Header />
        <Parallax>
          {children}
          <Footer />
        </Parallax>
      </BalancerProvider>
    </body>
  </html>
);

export default RootLayout;
