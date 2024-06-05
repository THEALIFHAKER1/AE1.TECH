import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@🧱/provider/theme-provider";
import { siteConfig } from "@📦/site";
import Navbar from "@🧱/layout/navbar/navbar";
import Footer from "@🧱/layout/footer/footer";
import WrapperPage from "@🧱/layout/wrapper/wrapper-page";
import { cn } from "@🛠️/utils";
import "@💅/globals.css";
import Maintenance from "./Maintenance";
import { env } from "@/env.mjs";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  metadataBase: new URL(siteConfig.url.base),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@THEALIFHAKER1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMaintenance = env.IS_MAINTENANCE === "true";
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `
          h-dvh 
          select-none 
          overscroll-none 
          bg-background
          antialiased
          selection:bg-foreground
          selection:text-background
          font-sans`,
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isMaintenance ? (
            <Maintenance />
          ) : (
            <WrapperPage navbar={<Navbar />} footer={<Footer />}>
              <main
                className={`
                border-forground
                mx-auto
                h-full
                max-w-screen-2xl
                space-y-4
                overflow-auto
                py-20
                `}
              >
                {children}
              </main>
            </WrapperPage>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
