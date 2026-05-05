
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Heart, Award, GraduationCap } from "lucide-react";

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === "about-dra-pami");

  const highlights = [
    { icon: <Heart className="text-pami-pink" />, title: "Calidez Humana", text: "Trato personalizado y empático." },
    { icon: <Award className="text-pami-orange" />, title: "Certificada", text: "Especialista en ortodoncia y estética." },
    { icon: <GraduationCap className="text-pami-blue" />, title: "Actualización", text: "Formación constante en nuevas técnicas." },
  ];

  return (
    <section className="py-20 bg-pami-bgSoft/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-pami-turquoise rounded-3xl rotate-3 -z-10 opacity-10"></div>
              <Image
                src={aboutImage?.imageUrl || ""}
                alt="Dra. Pami en su consultorio"
                width={600}
                height={400}
                className="rounded-3xl object-cover soft-shadow"
                data-ai-hint="dentist treatment"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h4 className="text-pami-turquoise font-bold tracking-wider uppercase text-sm mb-4">Sobre Dra. Pami</h4>
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">Expertiz que inspira confianza</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Mi misión es transformar la experiencia dental en algo positivo, indoloro y reparador. 
              Con más de una década dedicada a la salud bucal, creo firmemente que una sonrisa sana 
              es la base de la seguridad personal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((h, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white rounded-2xl shadow-sm border border-transparent hover:border-pami-blue/20 transition-colors">
                  <div className="mt-1">{h.icon}</div>
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
