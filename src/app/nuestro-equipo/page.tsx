import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Nuestro equipo | Dra. Pami Odontopediatría",
  description:
    "Conoce a la Dra. Miriam Zevallos y al equipo de asistencia clínica de Dra. Pami Odontopediatría.",
  alternates: {
    canonical: `${siteConfig.url}/nuestro-equipo`,
  },
};

export default function NuestroEquipoPage() {
  return (
    <>
      <main className="bg-pami-bgSoft/30">
        <header className="px-6 py-12 text-center md:py-16">
          <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-pami-purple">
            Dra. Pami Odontopediatría
          </p>
          <h1 className="mb-4 text-4xl font-bold text-[#2D3142] md:text-5xl">
            Nuestro equipo
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
            Conoce a quienes acompañan a tu peque en cada visita.
          </p>
        </header>

        <div className="container mx-auto max-w-6xl space-y-12 px-6 pb-16">
          <section aria-labelledby="odontopediatras">
            <h2
              id="odontopediatras"
              className="mb-6 text-2xl font-bold text-[#2D3142] md:text-3xl"
            >
              Odontopediatras
            </h2>

            <article className="grid overflow-hidden rounded-[2rem] bg-white soft-shadow md:grid-cols-2">
              <div className="relative min-h-[300px] bg-pami-bgSoft/50 md:min-h-[380px]">
                <Image
                  src="/especialistas/drapami/drapami.webp"
                  alt="Dra. Miriam Zevallos, odontopediatra"
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex flex-col items-start justify-center p-7 md:p-10">
                <p className="mb-3 text-sm font-semibold text-pami-purple">
                  Odontopediatra · Dra. Pami
                </p>
                <h3 className="mb-4 text-3xl font-bold text-[#2D3142]">
                  Dra. Miriam Zevallos
                </h3>
                <p className="mb-3 leading-relaxed text-muted-foreground">
                  Soy la Dra. Pami, especialista formada en la Faculdade São Leopoldo Mandic de Brasil, con un enfoque único en la atención integral de bebés. Mi misión es transformar la experiencia dental en un momento de amor y aprendizaje. Con registro de especialista RNE 04819, garantizo un tratamiento basado en evidencia científica y calidez humana.
                </p>
                <p className="mb-6 text-sm font-medium text-[#2D3142]">
                  Sede principal · San Juan de Lurigancho
                </p>

                <Link
                  href="/nuestro-equipo/miriam-zevallos"
                  className="inline-flex min-h-12 items-center rounded-full bg-pami-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-pami-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue focus-visible:ring-offset-2"
                >
                  Conoce a la Dra. Miriam
                </Link>
              </div>
            </article>
          </section>

          <section
            aria-labelledby="auxiliares-dentales"
            className="grid items-center gap-6 rounded-[2rem] bg-white p-7 soft-shadow md:grid-cols-2 md:gap-10 md:p-10"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-pami-bgSoft/30">
              <Image
                src="/especialistas/auxiliares/auxiliares.webp"
                alt="Dos auxiliares dentales en un consultorio odontopediátrico"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            <div>
              <h2
                id="auxiliares-dentales"
                className="mb-3 text-2xl font-bold text-[#2D3142]"
              >
                Auxiliares dentales
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                Nuestro equipo de asistencia clínica prepara el consultorio para cada
                visita, apoya a las odontopediatras durante la consulta y acompaña a tu
                peque mientras recibe atención.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer showContact={false} />
      <WhatsAppFloat />
    </>
  );
}