import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/ui/navbar";
import { LocalBusinessJsonLd } from "@/components/seo/local-business-jsonld";
import { siteConfig } from "@/lib/site-config";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,

  title: {
    default: "Dra. Pami | Odontopediatría en Lima",
    template: "%s | Dra. Pami",
  },

  description: siteConfig.description,

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: "Dra. Pami | Odontopediatría en Lima",
    description: siteConfig.description,

    images: [
      {
        url: "/hero-dra-pami.webp",
        alt: "Dra. Pami - Especialista en Odontopediatría",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dra. Pami | Odontopediatría en Lima",
    description: siteConfig.description,
    images: ["/hero-dra-pami.webp"],
  },

  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="es-PE">
      <head>
        <LocalBusinessJsonLd />
      </head>

      <body
        className={`${inter.className} antialiased bg-background pt-24`}
      >
        
          <Navbar />

          {children}

          <Toaster />
        

        <Analytics />

        {clarityId && (
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){
                  (c[a].q=c[a].q||[]).push(arguments)
                };
                t=l.createElement(r);
                t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        )}

        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}