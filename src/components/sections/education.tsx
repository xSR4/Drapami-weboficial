
"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const tips = [
  {
    title: "Cuándo debe ser la primera visita",
    category: "Bebés",
    image: "blog-first-visit"
  },
  {
    title: "El cepillado divertido en casa",
    category: "Higiene",
    image: "blog-brushing"
  },
  {
    title: "¿Qué es la ortodoncia preventiva?",
    category: "Desarrollo",
    image: "blog-ortho-kids"
  },
  {
    title: "Premios y stickers: Refuerzo positivo",
    category: "Psicología",
    image: "blog-first-visit"
  }
];

export function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#2D3142]">Guía para Padres</h2>
            <p className="text-muted-foreground">Todo lo que necesitas saber sobre la boquita de tus hijos.</p>
          </div>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {tips.map((tip, index) => {
              const imgData = PlaceHolderImages.find(img => img.id === tip.image);
              return (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-none rounded-[2rem] overflow-hidden group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative h-64 w-full mb-4 overflow-hidden rounded-[2rem]">
                        <Image
                          src={imgData?.imageUrl || ""}
                          alt={tip.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-pami-pink text-xs font-bold px-3 py-1 rounded-full">
                            {tip.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-pami-blue transition-colors">
                        {tip.title}
                      </h3>
                      <p className="text-sm text-pami-turquoise mt-2 font-medium">Leer artículo →</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="relative translate-y-0 left-0 hover:bg-pami-blue hover:text-white" />
            <CarouselNext className="relative translate-y-0 right-0 hover:bg-pami-blue hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
