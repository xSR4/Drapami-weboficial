import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { Certifications } from "@/components/sections/certifications";
import { Footer } from "@/components/sections/footer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { getYouTubeId } from "@/lib/experiences";
import { siteConfig } from "@/lib/site-config";

const trayectoriaVideoUrl = "https://www.youtube.com/shorts/9Pc3x4UjF0U";

export const metadata: Metadata = {
  title: "Dra. Miriam Zevallos | Dra. Pami Odontopediatría",
  description:
    "Conoce a la Dra. Miriam Zevallos, su enfoque en la atención dental infantil y su formación en odontopediatría.",
  alternates: {
    canonical: `${siteConfig.url}/nuestro-equipo/miriam-zevallos`,
  },
};

export default function MiriamZevallosPage() {
  const videoId = getYouTubeId(trayectoriaVideoUrl);

  const retrato = (
    <Image
      src="/especialistas/drapami/drapami.webp"
      alt="Retrato de la Dra. Miriam Zevallos"
      fill
      sizes="(max-width: 767px) 100vw, 50vw"
      className="object-cover object-top"
    />
  );

  return (
    <>
      <main className="bg-pami-bgSoft/30">
        <div className="container mx-auto max-w-6xl px-6 pb-10 pt-8 md:pt-12">
          <Link
            href="/nuestro-equipo"
            className="mb-6 inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-pami-blue underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue"
          >
            ← Volver a Nuestro equipo
          </Link>

          <section
            aria-labelledby="nombre-especialista"
            className="grid overflow-hidden rounded-[2rem] bg-white soft-shadow md:grid-cols-2"
          >
            <div className="relative min-h-[300px] overflow-hidden bg-pami-bgSoft/50 md:min-h-[380px]">
              {videoId ? (
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      aria-label="Ver la trayectoria de la Dra. Miriam Zevallos"
                      className="group absolute inset-0 block w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-pami-blue"
                    >
                      {retrato}

                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                      />

                      <span className="absolute inset-x-5 bottom-5 flex justify-center">
                        <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2D3142] shadow-md group-hover:bg-pami-bgSoft">
                          <Play
                            className="h-4 w-4 fill-current"
                            aria-hidden="true"
                          />
                          Ver su trayectoria
                        </span>
                      </span>
                    </button>
                  </DialogTrigger>

                  <DialogContent
                    aria-describedby={undefined}
                    className="w-[calc(100%_-_2rem)] max-w-4xl gap-0 overflow-hidden rounded-2xl border-0 bg-black p-0 [&>button]:z-10 [&>button]:rounded-full [&>button]:bg-white [&>button]:p-2 [&>button]:text-[#2D3142] [&>button]:opacity-100"
                  >
                    <DialogTitle className="sr-only">
                      Trayectoria y formación de la Dra. Miriam Zevallos
                    </DialogTitle>

                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`}
                      title="Trayectoria y formación de la Dra. Miriam Zevallos"
                      className="aspect-video max-h-[85dvh] w-full border-0"
                      allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </DialogContent>
                </Dialog>
              ) : (
                retrato
              )}
            </div>

            <div className="flex flex-col items-start justify-center p-7 md:p-10">
              <p className="mb-3 text-sm font-semibold text-pami-purple">
                Odontopediatra · Dra. Pami
              </p>

              <h1
                id="nombre-especialista"
                className="mb-4 text-3xl font-bold text-[#2D3142] md:text-4xl"
              >
                Dra. Miriam Zevallos
              </h1>

              <p className="mb-5 leading-relaxed text-muted-foreground">
                La Dra. Miriam Zevallos, conocida como Dra. Pami, es especialista
                en odontopediatría. Se formó en la Faculdade São Leopoldo Mandic,
                en Brasil, con énfasis en la atención de bebés. Acompaña a las
                familias desde la primera visita dental y durante el crecimiento
                de sus hijos.
              </p>

              <p className="mb-6 text-sm font-medium text-[#2D3142]">
                Sede principal · San Juan de Lurigancho
              </p>

              <TrackedExternalLink
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                eventParams={{ placement: "perfil_miriam_zevallos" }}
                className="inline-flex min-h-12 items-center rounded-full bg-pami-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-pami-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue focus-visible:ring-offset-2"
              >
                Agendar por WhatsApp
              </TrackedExternalLink>
            </div>
          </section>

          <section
            aria-labelledby="como-es-la-consulta"
            className="mt-8 rounded-[2rem] bg-white p-7 soft-shadow md:p-10"
          >
            <h2
              id="como-es-la-consulta"
              className="mb-3 text-2xl font-bold text-[#2D3142]"
            >
              Así es una consulta con la Dra. Miriam
            </h2>

            <p className="mb-6 leading-relaxed text-muted-foreground">
              En cada consulta, la Dra. Miriam se toma el tiempo de conocer a tu
              peque, explicarle qué va a pasar y acompañarlo a su ritmo.
            </p>

            <ol className="grid gap-4 md:grid-cols-3">
              <li className="rounded-2xl bg-pami-blue/5 p-5">
                <h3 className="mb-2 font-semibold text-[#2D3142]">
                  1. Nos conocemos
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Conversamos con la familia sobre el motivo de la visita y le
                  damos a tu peque tiempo para familiarizarse con el consultorio.
                </p>
              </li>

              <li className="rounded-2xl bg-pami-pink/5 p-5">
                <h3 className="mb-2 font-semibold text-[#2D3142]">
                  2. Le explicamos cada paso
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Le contamos qué vamos a hacer con palabras que pueda entender
                  y avanzamos según cómo se sienta.
                </p>
              </li>

              <li className="rounded-2xl bg-pami-turquoise/5 p-5">
                <h3 className="mb-2 font-semibold text-[#2D3142]">
                  3. Orientamos a la familia
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Al terminar, conversamos sobre lo observado, resolvemos sus
                  dudas y explicamos los cuidados en casa y los próximos pasos.
                </p>
              </li>
            </ol>
          </section>

          <section
            aria-labelledby="formacion-profesional"
            className="mt-8 rounded-[2rem] bg-white p-7 soft-shadow md:p-10"
          >
            <h2
              id="formacion-profesional"
              className="mb-5 text-2xl font-bold text-[#2D3142]"
            >
              Formación profesional
            </h2>

            <dl className="grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-semibold text-pami-purple">
                  Especialidad
                </dt>
                <dd className="mt-1 text-[#2D3142]">
                  Odontopediatría con énfasis en bebés
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold text-pami-purple">
                  Institución
                </dt>
                <dd className="mt-1 text-[#2D3142]">
                  Faculdade São Leopoldo Mandic, Brasil
                </dd>
              </div>

              <div>
                <dt className="text-sm font-semibold text-pami-purple">
                  Registro de especialista
                </dt>
                <dd className="mt-1 text-[#2D3142]">RNE 04819</dd>
              </div>
            </dl>
          </section>
        </div>

        <Certifications />
      </main>

      <Footer showContact={false} />
      <WhatsAppFloat />
    </>
  );
}