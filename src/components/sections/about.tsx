
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart, Baby, Star, Sparkles } from "lucide-react";

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === "about-dra-pami");

  const highlights = [
    { icon: <Baby className="text-pami-pink" />, title: "Manejo de Conducta", text: "Técnicas lúdicas para evitar el miedo dental." },
    { icon: <Heart className="text-pami-orange" />, title: "Atención con Amor", text: "Trato paciente y empático con cada niño." },
    { icon: <Star className="text-pami-blue" />, title: "Prevención Temprana", text: "Educación para una vida de sonrisas sanas." },
    { icon: <Sparkles className="text-pami-purple" />, title: "Prevención de Maloclusiones", text: "Detección temprana de hábitos para asegurar un crecimiento facial y dental armónico." },
  ];

  return (
    <section className="py-20 bg-pami-bgSoft/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-pami-blue rounded-[3rem] -rotate-3 -z-10 opacity-10"></div>
              <Image
                src={aboutImage?.imageUrl || ""}
                alt="Dra. Pami - Especialista en Odontopediatría"
                width={600}
                height={400}
                className="rounded-[3rem] object-cover soft-shadow border-4 border-white"
                data-ai-hint="pediatric dentist"
                unoptimized
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-pami-blue font-bold tracking-wider uppercase text-sm mb-4">Sobre Dra. Pami</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2D3142]">Experta en sonrisas pequeñitas</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Soy la Dra. Pami, especialista formada en la Faculdade São Leopoldo Mandic de Brasil, con un enfoque único en la atención integral de bebés. Mi misión es transformar la experiencia dental en un momento de amor y aprendizaje. Con registro de especialista RNE 04819, garantizo un tratamiento basado en evidencia científica y calidez humana.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start p-5 bg-white rounded-2xl shadow-sm border border-transparent hover:border-pami-blue/20 transition-all hover:scale-105">
                  <div className="mt-1 bg-muted p-2 rounded-xl">{h.icon}</div>
                  <div>
                    <h5 className="font-bold text-sm mb-1">{h.title}</h5>
                    <p className="text-xs text-muted-foreground">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
