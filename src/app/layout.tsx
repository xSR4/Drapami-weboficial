
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
  title: 'Dra. Pami - Odontopediatría con Amor',
  description: 'Especialista en sonrisas infantiles. Odontología pediátrica enfocada en la prevención y el bienestar de los más pequeños.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fredoka:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background pt-40">
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
