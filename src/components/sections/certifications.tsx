
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const certifications = [
  {
    title: "Manejo de Anquiloglosia",
    institution: "ECOPAL",
    year: "2024",
    type: "Capacitación",
    image: "cert-ecopal"
  },
  {
    title: "Filosofía Magui",
    institution: "Magui",
    year: "2024",
    type: "Capacitación",
    image: "cert-magui"
  },
  {
    title: "Especialista en Odontopediatría",
    institution: "Faculdade São Leopoldo Mandic - Brasil",
    year: "2022",
    type: "Postgrado",
    image: "cert-1"
  },
  {
    title: "Curso Avanzado de Manejo de Conducta",
    institution: "Sociedad Argentina de Odontopediatría",
    year: "2020",
    type: "Capacitación",
    image: "cert-1"
  },
  {
    title: "Diplomado en Ortodoncia Interceptiva",
    institution: "IDAP",
    year: "2021",
    type: "Diplomado",
    image: "cert-1"
  },
  {
    title: "Actualización en Estética Infantil",
    institution: "Círculo Odontológico",
    year: "2023",
    type: "Certificación",
    image: "cert-1"
  }
];

export function Certifications() {
  return (
    <section id="capacitaciones" className="py-20 bg-pami-bgSoft/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3142]">Capacitaciones y Certificaciones</h2>
          <p className="text-muted-foreground">Formación constante para brindar la mejor atención basada en evidencia científica.</p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {certifications.map((cert, index) => {
              const imgData = PlaceHolderImages.find(img => img.id === cert.image);
              return (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="border-none shadow-sm rounded-3xl bg-white hover:shadow-md transition-all group overflow-hidden h-full">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={imgData?.imageUrl || "https://picsum.photos/seed/cert/400/300"}
                        alt={cert.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        unoptimized={imgData?.imageUrl.startsWith('/')}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-pami-turquoise text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
                          {cert.type}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="bg-pami-blue/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pami-blue group-hover:text-white transition-colors">
                        <Award className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-base mb-2 group-hover:text-pami-blue transition-colors line-clamp-2 min-h-[3rem]">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1 italic">{cert.institution}</p>
                      <div className="flex items-center gap-2 mt-4 text-xs font-medium text-pami-blue">
                        <GraduationCap className="h-3 w-3" />
                        <span>{cert.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="hidden md:flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0 hover:bg-pami-blue hover:text-white border-pami-blue/20" />
            <CarouselNext className="static translate-y-0 hover:bg-pami-blue hover:text-white border-pami-blue/20" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
