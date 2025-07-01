import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next";
import cn from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ModalRenderer from "@/components/ModalRenderer";
import { ModalProvider } from "@/contexts/ModalContext";
import Header from "./_components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Nick Magidson | Frontend Engineer`,
  description: `Welcome to my personal portfolio and blog!`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Nick Magidson | Frontend Engineer" />
        <link rel="icon" href="/assets/blog/moon.png" type="image/png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/blog/moon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/blog/moon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/blog/moon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/assets/blog/moon.png" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <script
          defer
          data-domain="nickmagidson.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </head>
      <body
        className={cn(
          inter.className,
          "bg-[#0b0b0e] text-slate-50"
          //  "dark:bg-slate-900 dark:text-slate-400"
        )}
      >
        <ModalProvider>
          <Analytics />
          <Header />
          {/* <ThemeSwitcher /> */}

          <div>{children}</div>
          <Footer />
          <ModalRenderer />
        </ModalProvider>
      </body>
    </html>
  );
}
