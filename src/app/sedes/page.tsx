import type { Metadata } from "next";

import { Locations } from "@/components/sections/locations";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Consultorio principal y clínicas aliadas",

  description:
    "Encuentra el consultorio principal de Dra. Pami en San Juan de Lurigancho y nuestras clínicas aliadas en Lima. Consulta las direcciones y cómo llegar.",

  alternates: {
    canonical: `${siteConfig.url}/sedes`,
  },

  openGraph: {
    title: "Nuestras sedes | Dra. Pami",
    description:
      "Conoce nuestro consultorio principal y las clínicas aliadas donde atendemos previa cita.",
    url: `${siteConfig.url}/sedes`,
    images: [
      {
        url: "/logos/|.webp",
        alt: "Consultorio principal de Dra. Pami",
      },
    ],
  },
};

export default function SedesPage() {
  return (
    <>
      <main>
        <h1 className="sr-only">
          Consultorio principal y clínicas aliadas de Dra. Pami
        </h1>

        <Locations />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}