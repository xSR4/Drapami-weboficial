
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, ZoomIn } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

const certifications = [
  {
    title: "Especialista en Odontopediatría",
    institution: "Faculdade São Leopoldo Mandic - Brasil",
    year: "2022",
    type: "Postgrado Internacional",
    image: "cert-mandic"
  },
  {
    title: "Abordaje Clínico y Manejo de la Anquiloglosia",
    institution: "ECOPAL - Educación Continua para América Latina",
    year: "2026",
    type: "Capacitación Avanzada",
    image: "cert-ecopal"
  },
  {
    title: "Filosofía M.A.G.U.I - Manejo Clínico",
    institution: "CEOP - Centro de Estudios de Odontología Preventiva",
    year: "2026",
    type: "Certificación Especializada",
    image: "cert-magui"
  },
  {
    title: "Ortopedia Maxilar en la Dentición Infantil",
    institution: "Formación de Especialización Avanzada",
    year: "2024",
    type: "Certificación Clínica",
    image: "cert-ortopedia"
  },
  {
    title: "Cirugía Oral en Pacientes Pediátricos",
    institution: "Curso de Especialización Técnica",
    year: "2024",
    type: "Capacitación Quirúrgica",
    image: "cert-cirujia"
  },
  {
    title: "Uso de Resina Infiltrante para Caries Incipientes",
    institution: "RM Dental Training",
    year: "2024",
    type: "Certificación en Innovación",
    image: "cert-resina"
  },
  {
    title: "Anquiloglosia: Diagnóstico y Abordaje Clínico",
    institution: "Formación Especializada Avanzada",
    year: "2025",
    type: "Capacitación Técnica",
    image: "cert-anquiloglosia-v2"
  },
  {
    title: "Sedación Consciente con Óxido Nitroso",
    institution: "Sedamedic - Especialistas en Sedación",
    year: "2022",
    type: "Certificación de Habilitación",
    image: "cert-sedacion2"
  },
  {
    title: "Habilitación en Sedación Consciente Inhalatoria",
    institution: "CEGICAP - Capacitación Profesional",
    year: "2022",
    type: "Certificación Técnica",
    image: "cert-sedacion3"
  },
  {
    title: "Manejo Conductual y Sedación en Odontopediatría",
    institution: "Curso de Capacitación Avanzada",
    year: "2022",
    type: "Certificación en Conducta",
    image: "cert-sedacion"
  },
  {
    title: "Tecnología Láser aplicada a la Odontopediatría",
    institution: "Certificación en Odontología de Vanguardia",
    year: "2022",
    type: "Capacitación Tecnológica",
    image: "cert-laser"
  },
  {
    title: "Abordaje Clínico Integral Odontopediátrico",
    institution: "Programa de Formación Profesional Continua",
    year: "2022",
    type: "Certificación Integral",
    image: "cert-abordaje"
  },
  {
    title: "Diplomado en Odontología Pediátrica",
    institution: "Centro de Posgrado de Odontología - Lima",
    year: "2021",
    type: "Diplomado Académico",
    image: "cert-diplomado"
  }
];

export function Certifications() {
  return (
    <section id="capacitaciones" className="py-20 bg-pami-bgSoft/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3142]">Capacitaciones y Certificaciones</h2>
          <p className="text-muted-foreground">Formación académica constante para brindar una atención basada en la excelencia y evidencia científica actual.</p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4">
            {certifications.map((cert, index) => {
              const imgData = PlaceHolderImages.find(img => img.id === cert.image);
              const imageUrl = imgData?.imageUrl || "";
              
              return (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-sm rounded-3xl bg-white hover:shadow-md transition-all group overflow-hidden h-full">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative h-64 w-full overflow-hidden cursor-zoom-in">
                          <Image
                            src={imageUrl}
                            alt={cert.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            unoptimized
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8" />
                          </div>
                          <div className="absolute top-4 left-4 z-10">
                            <span className="bg-white/90 backdrop-blur-sm text-pami-turquoise text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full shadow-sm">
                              {cert.type}
                            </span>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl p-0 bg-transparent border-none overflow-hidden rounded-2xl">
                        <DialogTitle className="sr-only">Certificado: {cert.title}</DialogTitle>
                        <div className="relative w-full h-[80vh]">
                          <Image
                            src={imageUrl}
                            alt={cert.title}
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      </DialogContent>
                    </Dialog>

                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-pami-blue/10 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-pami-blue group-hover:text-white transition-colors">
                          <Award className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-base group-hover:text-pami-blue transition-colors line-clamp-2 leading-tight mt-1">
                          {cert.title}
                        </h3>
                      </div>
                      
                      <div className="pl-14">
                        <p className="text-sm text-muted-foreground mb-1 italic">{cert.institution}</p>
                        <div className="flex items-center gap-2 mt-3 text-xs font-medium text-pami-blue">
                          <GraduationCap className="h-3 w-3" />
                          <span>Año: {cert.year}</span>
                        </div>
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
