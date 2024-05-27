import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/style/globals.css';
import { ThemeProvider } from '@/components/provider/theme-provider';
import { siteConfig } from '@/config/site';
import Navbar from '@/components/layout/navbar/navbar';
import Footer from '@/components/layout/footer/footer';
import WrapperPage from '../components/layout/wrapper/wrapper-page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
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
    type: 'website',
    locale: 'en_US',
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@THEALIFHAKER1',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`
          h-dvh 
          select-none 
          overscroll-none 
          bg-background
          antialiased
          selection:bg-foreground
          selection:text-background
          ${inter.className}
          `}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          <WrapperPage
            navbar={<Navbar />}
            footer={<Footer />}
          >
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
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
