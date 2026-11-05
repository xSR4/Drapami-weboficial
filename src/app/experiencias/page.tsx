import type { Metadata } from "next";
import { Heart, MessageCircle } from "lucide-react";
import { ExperienceGallery } from "@/components/experiences/experience-gallery";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { experiences } from "@/lib/experiences";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Experiencias de nuestros pequeños pacientes",
  description: "Conoce las experiencias de los pequeños pacientes y sus familias con Dra. Pami. Historias de confianza y atención odontopediátrica en Lima.",
  alternates: { canonical: `${siteConfig.url}/experiencias` },
  openGraph: { title: "Pequeñas historias, grandes sonrisas | Dra. Pami", description: "Experiencias de nuestros pequeños pacientes y sus familias.", url: `${siteConfig.url}/experiencias`, images: [{ url: "/hero-dra-pami.webp", alt: "Dra. Pami" }] },
};

export default function ExperienciasPage() {
  return <>
    <main className="bg-pami-bgSoft/30 pb-16">
      <header className="px-6 py-12 text-center md:py-16">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-pami-purple"><Heart className="h-4 w-4 text-pami-pink" aria-hidden="true" /> Experiencias Dra. Pami</span>
        <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-bold leading-tight text-[#2D3142] md:text-5xl">Pequeñas historias,<br /><span className="text-pami-blue">grandes sonrisas</span></h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">Cada visita tiene su propio ritmo. Celebramos la confianza, los pequeños logros y los momentos felices de nuestros pacientes y sus familias.</p>
        {experiences.length > 0 && <p className="mt-5 text-sm font-medium text-pami-purple">Toca una foto y conoce su experiencia en video.</p>}
      </header>
      <section aria-label="Experiencias de nuestros pacientes" className="container mx-auto px-6"><ExperienceGallery experiences={experiences} /></section>
      <section className="container mx-auto mt-14 px-6">
        <div className="rounded-[2rem] bg-white px-6 py-10 text-center soft-shadow md:px-12">
          <h2 className="mb-3 text-2xl font-bold text-[#2D3142]">La próxima sonrisa puede ser la de tu pequeño</h2>
          <p className="mx-auto mb-6 max-w-xl leading-relaxed text-muted-foreground">Conversemos sobre su primera visita o su próximo control. Estamos para acompañarlos.</p>
          <TrackedExternalLink href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" eventName="whatsapp_click" eventParams={{ placement: "experiencias_bottom_cta" }} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-pami-blue px-7 py-3 font-semibold text-white transition-colors hover:bg-pami-blue/90"><MessageCircle className="h-5 w-5" aria-hidden="true" /> Agendar por WhatsApp</TrackedExternalLink>
        </div>
      </section>
    </main>
    <Footer showContact={false} />
    <WhatsAppFloat />
  </>;
}
