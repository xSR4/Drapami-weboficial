import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ClipboardList,
  Heart,
  MessageCircle,
  Search,
  Smile,
  Sparkles,
} from "lucide-react";

import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { Footer } from "@/components/sections/footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tratamientos dentales para bebés y niños | Dra. Pami",
  description:
    "Encuentra por dónde empezar con la atención dental de tu peque en Dra. Pami Odontopediatría, San Juan de Lurigancho.",
  alternates: {
    canonical: `${siteConfig.url}/tratamientos`,
  },
};

const procedimientos = [
  "Evaluación del frenillo y frenectomía",
  "Hipomineralización molar-incisivo (HMI)",
  "Operculectomía",
  "Mesiodens y otros dientes supernumerarios",
  "Radiografías dentales",
  "Pulpectomías",
  "Coronas dentales",
];

const motivos = [
  {
    id: "primera-visita",
    Icon: Heart,
    titulo: "Es su primera visita al dentista",
    subtitulo: "Conoce cómo acompañamos a tu peque a su ritmo.",
    ficha: "Primera visita dental",
    descripcion:
      "Un espacio para que tu peque conozca el consultorio y tú puedas compartir tus dudas.",
    consulta:
      "Conversamos contigo, le explicamos cada paso a tu peque y revisamos su sonrisa según cómo se sienta.",
    mensaje:
      "Hola, Dra. Pami. Quisiera agendar la primera visita dental de mi peque.",
  },
  {
    id: "limpieza-control",
    Icon: Sparkles,
    titulo: "Quiero una limpieza o un control",
    subtitulo: "Explora las opciones de prevención.",
    ficha: "Control, limpieza dental y flúor",
    descripcion:
      "Consulta por un control dental o por servicios como la limpieza, el barniz de flúor y los sellantes.",
    consulta:
      "La odontopediatra revisará la boca de tu peque y conversará contigo sobre los cuidados que corresponden según su evaluación.",
    mensaje:
      "Hola, Dra. Pami. Quisiera información sobre un control o una limpieza dental para mi peque.",
  },
  {
    id: "manchita",
    Icon: Search,
    titulo: "Vi una manchita y me preocupa",
    subtitulo: "Conoce cómo empieza la evaluación.",
    ficha: "Evaluación de manchas y caries",
    descripcion:
      "Si notaste una manchita o un cambio en un diente, puedes contarnos cuándo lo viste y qué te preocupa.",
    consulta:
      "La odontopediatra revisará el diente y te explicará lo que observa y las opciones que corresponden, incluidas las restauraciones si se requieren.",
    mensaje:
      "Hola, Dra. Pami. Vi una manchita en un diente de mi peque y quisiera agendar una evaluación.",
  },
  {
    id: "mordida",
    Icon: Smile,
    titulo: "Tengo dudas sobre su mordida",
    subtitulo: "Conoce la evaluación de crecimiento y mordida.",
    ficha: "Evaluación de crecimiento y mordida",
    descripcion:
      "Una consulta para conversar sobre cómo están creciendo los maxilares y cómo encajan los dientes de tu peque.",
    consulta:
      "La odontopediatra escuchará tus dudas, revisará la mordida y te explicará los siguientes pasos según lo que observe.",
    mensaje:
      "Hola, Dra. Pami. Tengo dudas sobre la mordida de mi peque y quisiera agendar una evaluación.",
  },
  {
    id: "movimiento-lengua",
    Icon: MessageCircle,
    titulo: "A mi peque le cuesta comer o pronunciar algunos sonidos",
    subtitulo: "Cuéntanos qué has notado al comer, hablar o mover la lengua.",
    ficha: "Revisemos cómo mueve la lengua tu peque",
    descripcion:
      "Durante la consulta podemos revisar cómo mueve la lengua y observar el frenillo, la pequeña banda de tejido que está debajo de ella.",
    consulta:
      "La odontopediatra escuchará lo que has observado en casa y te explicará si conviene una evaluación adicional.",
    mensaje:
      "Hola, Dra. Pami. Quisiera agendar una evaluación para mi peque. Me preocupa cómo come o pronuncia algunos sonidos.",
  },
  {
    id: "tratamiento-estudio",
    Icon: ClipboardList,
    titulo: "Me indicaron un tratamiento o estudio",
    subtitulo: "Consulta por un procedimiento específico.",
    ficha: "Consulta por un tratamiento o estudio",
    descripcion:
      "Si ya tienes una indicación o quieres preguntar por uno de estos servicios, podemos orientarte.",
    consulta:
      "Si tienes una indicación, un informe o una radiografía previa, puedes llevarlo a la consulta para revisarlo con la odontopediatra.",
    mensaje:
      "Hola, Dra. Pami. Quisiera consultar por un tratamiento o estudio dental para mi peque.",
    procedimientos,
  },
];

function crearEnlaceWhatsApp(mensaje: string) {
  const url = new URL(siteConfig.whatsappUrl);
  url.searchParams.set("text", mensaje);
  return url.toString();
}

export default function TratamientosPage() {
  return (
    <>
      <main className="bg-pami-bgSoft/30">
        <header className="px-6 py-12 text-center md:py-16">
          <div className="container mx-auto grid max-w-6xl items-center gap-5 px-6 py-4 md:grid-cols-2 md:gap-10 md:py-4">
            <div>
              <p className="mb-3 text-sm font-semibold text-pami-purple">
                Atención dental infantil
              </p>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-[#2D3142] md:text-5xl">
                ¿Cómo podemos ayudar a tu peque?
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                Si es su primera visita, quieres hacer un control o tienes
                alguna duda, aquí puedes encontrar por dónde empezar.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-pami-bgSoft soft-shadow">
              <Image
                src="/tratamientos/portadatratamientos.webp"
                alt="Portada de atención dental infantil de Dra. Pami"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </header>

        <section
          aria-labelledby="motivos-consulta"
          className="container mx-auto max-w-6xl px-6 pb-16 pt-4"
        >
          <h2
            id="motivos-consulta"
            className="mb-6 text-2xl font-bold text-[#2D3142] md:text-3xl"
          >
            Elige el motivo de tu consulta
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {motivos.map((motivo) => (
              <Dialog key={motivo.id}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group flex h-full w-full cursor-pointer items-center gap-4 rounded-2xl border border-pami-blue/15 bg-white p-5 text-left transition-colors hover:border-pami-blue/40 hover:bg-pami-blue/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue focus-visible:ring-offset-2"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pami-pink/10 text-pami-blue">
                      <motivo.Icon className="h-6 w-6" aria-hidden="true" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-[#2D3142]">
                        {motivo.titulo}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {motivo.subtitulo}
                      </span>
                    </span>

                    <ArrowRight
                      className="h-5 w-5 shrink-0 text-pami-blue"
                      aria-hidden="true"
                    />
                  </button>
                </DialogTrigger>

                <DialogContent className="max-h-[85dvh] w-[calc(100%_-_2rem)] max-w-lg gap-4 overflow-y-auto rounded-2xl bg-white p-6 sm:p-8">
                  <DialogTitle className="pr-8 text-2xl font-bold text-[#2D3142]">
                    {motivo.ficha}
                  </DialogTitle>

                  <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                    {motivo.descripcion}
                  </DialogDescription>

                  {motivo.procedimientos && (
                    <ul className="list-disc space-y-1 rounded-xl bg-pami-blue/5 py-4 pl-8 pr-4 text-sm text-[#2D3142]">
                      {motivo.procedimientos.map((procedimiento) => (
                        <li key={procedimiento}>{procedimiento}</li>
                      ))}
                    </ul>
                  )}

                  <div className="rounded-xl bg-pami-bgSoft/50 p-4">
                    <h3 className="mb-1 font-semibold text-[#2D3142]">
                      Qué esperar en la consulta
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {motivo.consulta}
                    </p>
                  </div>

                  <TrackedExternalLink
                    href={crearEnlaceWhatsApp(motivo.mensaje)}
                    target="_blank"
                    rel="noopener noreferrer"
                    eventName="whatsapp_click"
                    eventParams={{
                      placement: "motivos_consulta",
                      service: motivo.id,
                    }}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-pami-blue px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-pami-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue focus-visible:ring-offset-2"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Consultar por WhatsApp
                  </TrackedExternalLink>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      </main>

      <Footer showContact={false} />
      <WhatsAppFloat />
    </>
  );
}