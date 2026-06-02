
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck, Heart, Clock, FileText, ListChecks } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const tiposSedacion = [
  {
    titulo: "Sedación con Midazolam",
    tag: "Consciente",
    descripcion: "Es una sedación consciente administrada por vía oral o nasal. El niño permanece despierto pero en un estado de relajación profunda, tranquilidad y cooperación durante el tratamiento.",
    procedimiento: "Se administra una dosis calculada según el peso del niño. Es indispensable presentar una hoja de interconsulta firmada por su pediatra con el certificado de 'Niño Sano' o 'Apto para Sedación'.",
    duracion: "Ideal para sesiones de tratamiento integral con una duración máxima de 1 hora y 15 minutos.",
    indicaciones: [
      "Venir en ayunas completo (ni agua, ni leche).",
      "Traer un frugos en cajita (durazno, no pulp) para después del tratamiento.",
      "Traer una muda de ropa completa y un pañal.",
      "Traer una sobre sábana o mantita.",
      "Asistir puntualmente a la cita y asegurar que el niño esté sano (sin gripe o tos).",
      "La noche previa dormir tarde y consumir una cena muy ligera."
    ],
    imagen: "sed-midazolam"
  },
  {
    titulo: "Sedación con Óxido Nitroso",
    tag: "Inhalada",
    descripcion: "Conocido como el 'gas de la risa', es un método muy seguro donde el niño inhala una mezcla de gases que reduce la ansiedad y la percepción del dolor sin dormir al paciente.",
    procedimiento: "Se utiliza una mascarilla nasal con aromas agradables. El efecto es inmediato y, al retirar la mascarilla, los efectos desaparecen en pocos minutos, permitiendo volver a la rutina normal.",
    duracion: "Permite realizar diversos procedimientos en sesiones de aproximadamente 1 hora.",
    indicaciones: [
      "Llegar puntual a la hora indicada.",
      "Ayuno de 4 a 8 horas dependiendo de la edad (evitar comidas pesadas como carnes o menestras).",
      "No ingerir líquidos antes del procedimiento.",
      "Traer una manta o colcha para confort del niño.",
      "Traer una merienda ligera para consumir al finalizar la sesión."
    ],
    imagen: "sed-nitroso"
  },
  {
    titulo: "Sedación Profunda",
    tag: "Hospitalaria / Consultorio",
    descripcion: "Es un estado de sueño profundo controlado donde el niño no siente dolor ni recuerda el procedimiento. Es la opción de elección para casos de alta complejidad o pacientes con necesidades especiales.",
    procedimiento: "Realizada íntegramente por un Médico Anestesiólogo especializado que monitorea los signos vitales en todo momento, garantizando la máxima seguridad clínica durante toda la intervención.",
    duracion: "Variable según el caso clínico; permite completar todo el tratamiento dental necesario en una sola sesión.",
    indicaciones: [
      "Evaluación pre-anestésica obligatoria con el especialista.",
      "Ayuno estricto de sólidos y líquidos de 8 horas.",
      "Asistir con ambos padres o tutores legales.",
      "Informar detalladamente sobre cualquier medicación o condición médica previa.",
      "Reposo relativo en casa durante el resto del día tras el procedimiento."
    ],
    imagen: "sed-profunda"
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
            La sedación nos permite brindar una atención de calidad sin traumas, asegurando que tu hijo tenga una experiencia positiva, segura y libre de ansiedad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto mb-20">
          {tiposSedacion.map((tipo, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === tipo.imagen);
            const imageUrl = imgData?.imageUrl || "/foto perfilpami.jpg";
            
            return (
              <Card key={index} className="border-none soft-shadow rounded-[3rem] overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="md:w-1/2 relative h-80 md:h-auto min-h-[400px]">
                      <Image
                        src={imageUrl}
                        alt={tipo.titulo}
                        fill
                        className="object-contain p-4 bg-pami-bgSoft/10"
                        data-ai-hint={imgData?.imageHint || "pediatric sedation"}
                        unoptimized={imageUrl.startsWith("/")}
                      />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-10">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-pami-blue font-bold text-xs uppercase tracking-widest">{tipo.tag}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#2D3142] mb-4">{tipo.titulo}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-justify">
                        {tipo.descripcion}
                      </p>

                      <div className="space-y-4">
                        <div className="bg-pami-blue/5 p-4 rounded-2xl">
                          <div className="flex items-center gap-2 text-pami-blue font-bold mb-2 text-sm">
                            <FileText className="h-4 w-4" /> Procedimiento
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed text-justify">{tipo.procedimiento}</p>
                        </div>

                        <div className="bg-pami-turquoise/5 p-4 rounded-2xl">
                          <div className="flex items-center gap-2 text-pami-turquoise font-bold mb-2 text-sm">
                            <Clock className="h-4 w-4" /> Duración Estimada
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed text-justify">{tipo.duracion}</p>
                        </div>

                        <div className="bg-pami-pink/5 p-4 rounded-2xl">
                          <div className="flex items-center gap-2 text-pami-pink font-bold mb-2 text-sm">
                            <ListChecks className="h-4 w-4" /> Indicaciones Principales
                          </div>
                          <ul className="space-y-2">
                            {tipo.indicaciones.map((ind, i) => (
                              <li key={i} className="flex items-start gap-2 text-[11px] text-[#4A4E69]">
                                <div className="h-1.5 w-1.5 rounded-full bg-pami-pink mt-1.5 shrink-0" />
                                {ind}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-white border-none soft-shadow rounded-[2rem] p-10 text-center mb-16 max-w-4xl mx-auto">
          <Heart className="h-12 w-12 text-pami-pink mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-[#2D3142] mb-4">¿Tienes dudas sobre la sedación para tu hijo?</h2>
          <p className="text-muted-foreground mb-8">
            Cada niño es único. Conversa con nosotros para determinar cuál es el método más adecuado y seguro según la historia clínica de tu pequeño.
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
    </main>
  );
}
