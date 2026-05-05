
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-dra-pami");

  return (
    <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 z-10">
          <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-6">
            Una <span className="text-pami-blue">sonrisa</span> que refleja tu mejor versión
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Combinamos tecnología de vanguardia con un trato cálido y humano. 
            Transformamos vidas a través de la salud dental experta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-pami-blue hover:bg-pami-blue/90 text-white rounded-full px-8 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Agendar Cita vía WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-pami-turquoise text-pami-turquoise hover:bg-pami-turquoise/10">
              Nuestros Tratamientos
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-pami-turquoise/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden soft-shadow">
            <Image
              src={heroImage?.imageUrl || ""}
              alt="Dra. Pami sonriendo profesionalmente"
              width={800}
              height={1000}
              className="object-cover w-full h-auto"
              data-ai-hint="dentist doctor smiling"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-pami-bgSoft">
            <div className="flex items-center gap-4">
              <div className="bg-pami-pink/20 p-3 rounded-xl">
                <span className="text-pami-pink font-bold text-2xl">+10</span>
              </div>
              <div>
                <p className="font-bold text-sm">Años de</p>
                <p className="text-xs text-muted-foreground">Experiencia Dental</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
