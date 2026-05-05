
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap, BookOpen } from "lucide-react";

const certifications = [
  {
    title: "Especialista en Odontopediatría",
    institution: "Universidad de Buenos Aires",
    year: "2018",
    type: "Postgrado"
  },
  {
    title: "Curso Avanzado de Manejo de Conducta",
    institution: "Sociedad Argentina de Odontopediatría",
    year: "2020",
    type: "Capacitación"
  },
  {
    title: "Diplomado en Ortodoncia Interceptiva",
    institution: "IDAP",
    year: "2021",
    type: "Diplomado"
  },
  {
    title: "Actualización en Estética Infantil",
    institution: "Círculo Odontológico",
    year: "2023",
    type: "Certificación"
  }
];

export function Certifications() {
  return (
    <section className="py-20 bg-pami-bgSoft/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3142]">Capacitaciones y Certificaciones</h2>
          <p className="text-muted-foreground">La formación constante nos permite brindar la mejor atención basada en evidencia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-none shadow-sm rounded-3xl bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-pami-blue/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Award className="text-pami-blue h-6 w-6" />
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-pami-turquoise mb-2 block">{cert.type}</span>
                <h3 className="font-bold text-base mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{cert.institution}</p>
                <div className="flex items-center gap-2 mt-4 text-xs font-medium text-pami-blue">
                  <GraduationCap className="h-3 w-3" />
                  <span>{cert.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
