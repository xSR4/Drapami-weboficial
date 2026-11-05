import Image from "next/image";
import { MessageCircle, PlayCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const heroImage = PlaceHolderImages.find(
    (image) => image.id === "hero-dra-pami"
  );

  return (
    <section className="relative overflow-hidden bg-white px-6 py-7 md:py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-6 md:grid-cols-2 md:gap-10">
        <div className="relative z-10 min-w-0">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pami-pink/10 px-4 py-2 text-sm font-bold text-pami-pink">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Especialistas en Odontopediatría
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#2D3142] lg:text-5xl">
            Donde cada <span className="text-pami-blue">sonrisa</span> infantil es una aventura
          </h1>

          <p className="mb-8 max-w-lg text-lg text-muted-foreground">
            Convertimos la visita al dentista en una experiencia divertida y sin miedos.
            Cuidamos la salud bucal de tus hijos con paciencia, juegos y mucho amor.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="flex h-14 cursor-pointer items-center gap-2 rounded-full bg-pami-blue px-6 text-white shadow-lg hover:bg-pami-blue/90 lg:px-8"
            >
              <TrackedExternalLink
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                eventParams={{
                  placement: "home_hero",
                  service: "primera_consulta",
                }}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Agendar Primera Consulta
              </TrackedExternalLink>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex h-14 items-center gap-2 rounded-full border-pami-pink px-6 text-pami-pink hover:bg-pami-pink/10 lg:px-8"
                >
                  <PlayCircle className="h-5 w-5" aria-hidden="true" />
                  Consultorio Virtual
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-[420px] overflow-hidden rounded-3xl border-none p-0">
                <DialogHeader className="sr-only">
                  <DialogTitle>Consultorio Virtual Dra. Pami</DialogTitle>
                </DialogHeader>

                <div className="w-full bg-black">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7462582393212259590"
                    title="Consultorio Virtual Dra. Pami"
                    className="h-[720px] w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="relative min-w-0">
          <div
            className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-pami-pink/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-pami-turquoise/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="soft-shadow relative z-10 aspect-[4/3] w-full overflow-hidden rounded-[2rem] md:aspect-square">
            <Image
              src={heroImage?.imageUrl || "/hero-dra-pami.webp"}
              alt="Dra. Pami en su consultorio"
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1328px) calc((100vw - 88px) / 2), 620px"
              priority
            />
          </div>

          <div
            className="absolute right-4 top-4 z-20 animate-bounce-slow rounded-2xl border border-pami-bgSoft bg-white p-4 shadow-xl"
            aria-hidden="true"
          >
            <span className="text-2xl">🦷✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}