import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/ui/navbar";
import { FirebaseClientProvider } from "@/firebase";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Dra. Pami - Odontopediatría con Amor",
  description:
    "Especialista en sonrisas infantiles. Odontología pediátrica enfocada en la prevención y el bienestar de los más pequeños.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fredoka:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-body antialiased bg-background pt-24">
        <FirebaseClientProvider>
          <Navbar />
          {children}
          <Toaster />
        </FirebaseClientProvider>

        {/* Vercel Analytics */}
        <Analytics />

        {/* Microsoft Clarity - al final */}
        {clarityId && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        )}
      </body>

      {/* Google Analytics 4 */}
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}