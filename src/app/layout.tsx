import type { ReactNode } from "react";

import type { Metadata } from "next";
import { Jost } from "next/font/google";

import { cx } from "cva";

import { BalancerProvider } from "@/components/balancer/provider";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Parallax } from "@/components/parallax";

import { BASE_URL } from "@/constants/environment";

import "@/styles/global.css";

type RootLayoutProps = {
  children: ReactNode;
};

const title: Metadata["title"] = {
  default: "Mateusz Aliyev",
  template: "%s | Mateusz Aliyev",
};

export const metadata: Metadata = {
  alternates: {
    canonical: BASE_URL,
  },
  description: "Software engineer passionate about frontend development.",
  icons: {
    apple: "/assets/images/favicons/apple-touch-icon.png",
    icon: [
      {
        sizes: "16x16",
        type: "image/png",
        url: "/assets/images/favicons/favicon-16x16.png",
      },
      {
        sizes: "32x32",
        type: "image/png",
        url: "/assets/images/favicons/favicon-32x32.png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/assets/images/favicons/site.webmanifest",
      },
    ],
    shortcut: "/assets/images/favicons/favicon.ico",
  },
  openGraph: {
    locale: "en-US",
    siteName: "Mateusz Aliyev",
    title,
    type: "website",
    url: BASE_URL,
  },
  themeColor: "#000000",
  title,
};

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

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
