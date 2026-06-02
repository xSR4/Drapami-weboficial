
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-dra-pami");

  return (
    <section className="relative overflow-hidden pt-20 pb-12 md:pt-32 md:pb-24 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 z-10">
          <div className="inline-flex items-center gap-2 bg-pami-pink/10 text-pami-pink px-4 py-2 rounded-full mb-6 font-bold text-sm">
            <Sparkles className="h-4 w-4" />
            Especialista en Odontopediatría
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-[#2D3142]">
            Donde cada <span className="text-pami-blue">sonrisa</span> infantil es una aventura
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg text-justify">
            Convertimos la visita al dentista en una experiencia divertida y sin miedos. 
            Cuidamos la salud bucal de tus hijos con paciencia, juegos y mucho amor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-pami-blue hover:bg-pami-blue/90 text-white rounded-full px-8 flex items-center gap-2 h-14 shadow-lg cursor-pointer">
              <a href="https://wa.link/5dmwvi" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Agendar Primera Consulta
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-pami-turquoise text-pami-turquoise hover:bg-pami-turquoise/10 h-14">
              <Link href="/tratamientos">
                Ver Tratamientos
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-pami-pink/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-pami-turquoise/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 rounded-[3rem] overflow-hidden soft-shadow border-8 border-white">
            <Image
              src={heroImage?.imageUrl || "/foto portada.jpg"}
              alt="Dra. Pami - Portada"
              width={800}
              height={1000}
              className="object-cover w-full h-auto"
              unoptimized
              priority
            />
          </div>
          <div className="absolute top-10 -right-4 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce-slow border border-pami-bgSoft">
            <span className="text-2xl">🦷✨</span>
          </div>
        </div>
      </div>
    </section>
  );
}
