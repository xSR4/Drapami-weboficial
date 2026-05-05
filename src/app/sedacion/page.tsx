
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck, Heart, Info, Clock, AlertCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const tiposSedacion = [
  {
    titulo: "Sedación con Midazolam",
    descripcion: "Es una sedación consciente administrada por vía oral o nasal. El niño permanece despierto pero en un estado de relajación profunda y tranquilidad, eliminando la ansiedad del tratamiento.",
    beneficios: ["Efecto rápido", "No requiere agujas", "El niño colabora voluntariamente"],
    imagen: "sedacion-midazolam",
    tag: "Consciente"
  },
  {
    titulo: "Sedación con Óxido Nitroso",
    descripcion: "Conocido como 'el gas de la risa'. Se inhala a través de una pequeña máscara nasal. Es extremadamente seguro y sus efectos desaparecen minutos después de retirar la máscara.",
    beneficios: ["Recuperación inmediata", "Efecto analgésico", "Ideal para miedos leves a moderados"],
    imagen: "sedacion-nitroso",
    tag: "Inhalada"
  },
  {
    titulo: "Sedación Profunda",
    descripcion: "Realizada por un médico anestesiólogo especializado. El niño duerme durante todo el procedimiento. Es la opción ideal para casos complejos, pacientes muy pequeños o con necesidades especiales.",
    beneficios: ["Cero estrés para el niño", "Tratamiento completo en una cita", "Monitoreo constante profesional"],
    imagen: "sedacion-profunda",
    precio: "2000.00",
    tag: "Hospitalaria / Consultorio"
  }
];

export default function SedacionPage() {
  return (
    <main className="min-h-screen bg-pami-bgSoft/30 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-pami-pink/10 text-pami-pink font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
            Seguridad y Confort
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3142] mb-6 mt-4">Tratamientos bajo Sedación</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Entendemos que algunos pequeñitos pueden sentir mucho miedo o ansiedad. La sedación nos permite brindar una atención de calidad sin traumas, asegurando que el niño no guarde malos recuerdos del dentista.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto mb-20">
          {tiposSedacion.map((tipo, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === tipo.imagen);
            return (
              <Card key={index} className="border-none soft-shadow rounded-[3rem] overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                      <Image
                        src={imgData?.imageUrl || ""}
                        alt={tipo.titulo}
                        fill
                        className="object-cover"
                        data-ai-hint={imgData?.imageHint}
                      />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-pami-blue font-bold text-xs uppercase tracking-widest">{tipo.tag}</span>
                        {tipo.precio && (
                          <div className="text-right">
                            <span className="text-2xl font-bold text-pami-blue block">S/ {tipo.precio}</span>
                            <span className="text-[10px] text-muted-foreground">+ IGV</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold text-[#2D3142] mb-4">{tipo.titulo}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {tipo.descripcion}
                      </p>
                      <ul className="space-y-3">
                        {tipo.beneficios.map((ben, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-medium text-[#4A4E69]">
                            <ShieldCheck className="h-5 w-5 text-pami-turquoise" />
                            {ben}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card className="bg-pami-blue/5 border-none rounded-[2rem] p-8">
              <div className="flex gap-4 mb-4">
                <div className="bg-pami-blue p-2 rounded-xl text-white">
                  <Clock className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg text-[#2D3142]">¿Cuándo se recomienda?</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Se recomienda en niños con ansiedad extrema, fobia dental, necesidad de múltiples tratamientos en una sola sesión o pacientes con condiciones que dificulten la cooperación tradicional.
              </p>
            </Card>
            <Card className="bg-pami-orange/5 border-none rounded-[2rem] p-8">
              <div className="flex gap-4 mb-4">
                <div className="bg-pami-orange p-2 rounded-xl text-white">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-lg text-[#2D3142]">Seguridad Primero</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Todos nuestros procedimientos bajo sedación cumplen con estrictos protocolos internacionales de monitoreo y seguridad para garantizar el bienestar total de tu hijo.
              </p>
            </Card>
          </div>

          <Card className="bg-white border-none soft-shadow rounded-[2rem] p-10 text-center mb-16">
            <Heart className="h-12 w-12 text-pami-pink mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-[#2D3142] mb-4">¿Quieres saber cuál es la mejor opción para tu hijo?</h2>
            <p className="text-muted-foreground mb-8">
              Agenda una evaluación previa para conversar sobre la historia clínica de tu pequeño y determinar el método más adecuado.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-pami-blue hover:bg-pami-blue/90 text-white rounded-full px-10 h-14">
                <a href="https://wa.link/5dmwvi" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Consultar por WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 border-pami-turquoise text-pami-turquoise hover:bg-pami-turquoise/10 h-14">
                <Link href="/">
                  Volver al Inicio
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
