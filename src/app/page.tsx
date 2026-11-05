import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ExperienceCarousel } from "@/components/experiences/experience-carousel";
// import { AIAssistant } from "@/components/sections/ai-assistant";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Locations } from "@/components/sections/locations";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { experiences } from "@/lib/experiences";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Odontopediatra en San Juan de Lurigancho",
  description:
    "Odontopediatra en San Juan de Lurigancho para bebés, niños y adolescentes. Prevención, tratamientos infantiles, ortopedia y sedación según evaluación profesional.",
  alternates: { canonical: siteConfig.url },
  openGraph: {
    url: siteConfig.url,
    title: "Odontopediatra en San Juan de Lurigancho | Dra. Pami",
    description:
      "Atención odontopediátrica para bebés, niños y adolescentes en San Juan de Lurigancho, Lima.",
    images: [
      { url: "/hero-dra-pami.webp", alt: "Dra. Pami - Odontopediatría" },
    ],
  },
};

const consultationReasons = [
  {
    title: "Es su primera visita",
    description: "Quiero saber cómo será la consulta y cómo preparar a mi peque.",
    sticker: "/main/consulta.webp",
    stickerClass: "bg-pami-pink/10",
  },
  {
    title: "Le duele un diente",
    description:
      "Me dice que le duele al masticar o he visto algo diferente en un diente.",
    sticker: "/main/dolor.webp",
    stickerClass: "bg-pami-blue/10",
  },
  {
    title: "Le da miedo ir al dentista",
    description:
      "Se pone nervioso al hablar de la cita o tuvo una visita difícil antes.",
    sticker: "/main/miedo.webp",
    stickerClass: "bg-pami-turquoise/10",
  },
];

const visitSteps = [
  {
    moment: "Antes de empezar",
    title: "Nos conocemos",
    description:
      "Escuchamos qué les trae al consultorio y le damos tiempo a tu peque para conocer el espacio.",
  },
  {
    moment: "Durante la consulta",
    title: "Le mostramos qué va a pasar",
    description:
      "Le enseñamos lo que vamos a usar y le explicamos cada paso con palabras que pueda entender.",
  },
  {
    moment: "Al terminar",
    title: "Conversamos contigo",
    description:
      "Te contamos qué observamos, resolvemos tus dudas y acordamos los próximos pasos.",
  },
];

const carouselStories = experiences.map(({ id, childName, photo }) => ({
  id,
  name: childName,
  image: photo,
}));

export default function Home() {
  return (
    <main className="relative bg-white">
      <Hero />

      <section aria-labelledby="motivos-consulta" className="px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="motivos-consulta"
            className="mb-6 text-center text-2xl font-bold text-[#2D3142] md:text-3xl"
          >
            ¿Cómo podemos ayudarte?
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            {consultationReasons.map(
              ({ title, description, sticker, stickerClass }) => (
                <Link
                  key={title}
                  href="/tratamientos"
                  className="group relative grid grid-cols-[4.5rem_minmax(0,1fr)] items-center gap-3 rounded-3xl border border-pami-blue/20 bg-white p-4 transition-colors hover:bg-pami-blue/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue lg:grid-cols-[6rem_minmax(0,1fr)] lg:gap-4 lg:p-5"
                >
                  <div
                    className={`relative aspect-square rounded-[1.25rem] ${stickerClass}`}
                  >
                    <Image
                      src={sticker}
                      alt=""
                      fill
                      sizes="(max-width: 1023px) 72px, 96px"
                      className="object-contain p-1.5 transition-transform motion-safe:group-hover:scale-105"
                    />
                  </div>

                  <div>
                    <h3 className="pr-5 font-bold text-[#2D3142]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>

                  <ArrowUpRight
                    className="absolute right-4 top-4 h-4 w-4 text-pami-blue"
                    aria-hidden="true"
                  />
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      <section
        id="como-atendemos"
        aria-labelledby="titulo-como-atendemos"
        className="scroll-mt-24 px-6 py-4"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-6 rounded-[2rem] bg-pami-turquoise/10 p-5 md:grid-cols-[2fr_3fr] md:gap-8 md:px-7 md:py-9">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl md:aspect-square">
            <Image
              src="/main/portadatratamientos.webp"
              alt="La Dra. Pami con un bebé en el consultorio"
              fill
              sizes="(max-width: 767px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>

          <div>
            <h2
              id="titulo-como-atendemos"
              className="mb-5 text-2xl font-bold text-[#2D3142] md:text-3xl"
            >
              Así acompañamos a tu peque
            </h2>

            <ol>
              {visitSteps.map(({ moment, title, description }, index) => (
                <li
                  key={moment}
                  className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-3 pb-5 last:pb-0"
                >
                  {index < visitSteps.length - 1 && (
                    <span
                      className="absolute bottom-0 left-4 top-8 w-px -translate-x-1/2 bg-pami-turquoise/40"
                      aria-hidden="true"
                    />
                  )}

                  <span
                    className="relative grid h-8 w-8 place-items-center rounded-full bg-white text-sm font-bold text-[#276D71]"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>

                  <div>
                    <p className="text-xs font-semibold text-[#276D71]">
                      {moment}
                    </p>
                    <h3 className="mt-0.5 font-bold text-[#2D3142]">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="px-6 py-4">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[minmax(0,42fr)_minmax(0,58fr)]">
          <section
            id="sobre-mi"
            aria-labelledby="titulo-equipo"
            className="scroll-mt-24 rounded-[2rem] bg-pami-pink/10 p-5 lg:p-6"
          >
            <Link
              id="capacitaciones"
              href="/nuestro-equipo"
              className="group block h-full scroll-mt-24 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <h2
                  id="titulo-equipo"
                  className="text-2xl font-bold text-[#2D3142]"
                >
                  Conoce a nuestro equipo
                </h2>

                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-pami-blue"
                  aria-hidden="true"
                />
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-white md:aspect-[9/8]">
                <Image
                  src="/main/fotodelequipo.webp"
                  alt="Equipo de Dra. Pami Odontopediatría"
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1327px) 42vw, 490px"
                  className="object-cover object-center transition-transform duration-300 motion-safe:group-hover:scale-105"
                />
              </div>

              <p className="mt-4 font-semibold text-[#2D3142]">
                Estamos contigo desde que llegas.
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Conoce a la Dra. Miriam Zevallos y a los auxiliares que
                acompañan a tu peque durante su visita.
              </p>
            </Link>
          </section>

          <section
            aria-labelledby="titulo-historias"
            className="flex min-w-0 flex-col rounded-[2rem] bg-pami-turquoise/10 p-5 lg:p-6"
          >
            <Link
              href="/experiencias"
              className="mb-4 flex items-start justify-between gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue"
            >
              <h2
                id="titulo-historias"
                className="text-2xl font-bold text-[#2D3142]"
              >
                Historias de nuestras familias
              </h2>

              <ArrowUpRight
                className="mt-1 h-5 w-5 shrink-0 text-pami-blue"
                aria-hidden="true"
              />
            </Link>

            <ExperienceCarousel stories={carouselStories} />
          </section>
        </div>
      </div>

      <div id="sedes" className="scroll-mt-24">
        <Locations home />
      </div>

      {/* <AIAssistant /> */}
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}