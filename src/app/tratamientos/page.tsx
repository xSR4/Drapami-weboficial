
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const procedimientos = [
  { 
    nombre: "Consulta Integral", 
    descripcion: "Evaluación completa de la salud bucal con técnicas de adaptación lúdica para que tu pequeño se sienta seguro y feliz.",
    destaque: true,
    imagenId: "tr-consulta"
  },
  { 
    nombre: "Restauración Simple", 
    descripcion: "Curación de caries pequeñas utilizando materiales estéticos de alta calidad para devolver la salud al dientecito.",
    imagenId: "tr-rest-simple"
  },
  { 
    nombre: "Restauración Compuesta", 
    descripcion: "Tratamiento para caries medianas que requiere la reconstrucción de varias paredes del diente de forma estética.",
    imagenId: "tr-rest-compuesta"
  },
  { 
    nombre: "Restauraciones Complejas", 
    descripcion: "Reparación profunda de piezas dentales con daños extensos para recuperar su función y apariencia natural.",
    imagenId: "tr-rest-compleja"
  },
  { 
    nombre: "Sellantes de Fosas y Fisuras", 
    descripcion: "Capa protectora aplicada en las muelitas para evitar que los restos de comida causen caries en el futuro.",
    imagenId: "tr-sellantes"
  },
  { 
    nombre: "Extracción Simple", 
    descripcion: "Retiro cuidadoso de un diente de leche que ya cumplió su ciclo o presenta un daño que no permite salvarlo.",
    imagenId: "tr-ext-simple"
  },
  { 
    nombre: "Extracción Compleja", 
    descripcion: "Procedimiento especializado para retirar piezas dentales que requieren un abordaje técnico más detallado.",
    imagenId: "tr-ext-compleja"
  },
  { 
    nombre: "Corona de Resina", 
    descripcion: "Funda estética y resistente diseñada especialmente para proteger los dientes frontales muy dañados.",
    imagenId: "tr-corona-resina"
  },
  { 
    nombre: "Corona de Metal", 
    descripcion: "Protección extra fuerte y duradera para muelitas posteriores que han perdido mucha estructura dental.",
    imagenId: "tr-corona-metal"
  },
  { 
    nombre: "Frenectomía", 
    descripcion: "Pequeña intervención para liberar frenillos que dificultan el habla, la alimentación o el correcto desarrollo.",
    imagenId: "tr-frenectomia"
  },
  { 
    nombre: "Pulpectomía", 
    descripcion: "Tratamiento de nervio para salvar muelitas con infecciones profundas, evitando su pérdida prematura.",
    imagenId: "about-dra-pami"
  },
  { 
    nombre: "Radiografía Periapical", 
    descripcion: "Imagen detallada de la raíz del diente para un diagnóstico preciso de lo que no se ve a simple vista.",
    imagenId: "about-dra-pami"
  },
  { 
    nombre: "Profilaxis + Barniz de Flúor", 
    descripcion: "Limpieza profesional profunda seguida de una aplicación de flúor de alta concentración para fortalecer el esmalte.",
    imagenId: "about-dra-pami"
  },
  { 
    nombre: "Perno + Corona", 
    descripcion: "Refuerzo interno y funda protectora para reconstruir dientes con gran pérdida de tejido dental.",
    imagenId: "about-dra-pami"
  },
  { 
    nombre: "Evaluación de Ortopedia", 
    descripcion: "Estudio del crecimiento de los huesos de la cara para detectar y corregir problemas de mordida a temprana edad.",
    imagenId: "about-dra-pami"
  },
];

export default function TratamientosPage() {
  return (
    <main className="min-h-screen bg-pami-bgSoft/30 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-pami-blue/10 text-pami-blue font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3142] mb-4">Servicios Especializados</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos una atención odontopediátrica integral, enfocada en la prevención y el bienestar emocional de tus hijos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {procedimientos.map((proc, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === proc.imagenId);
            return (
              <Card key={index} className={`border-none soft-shadow rounded-[2.5rem] overflow-hidden transition-all hover:scale-[1.02] bg-white flex flex-col ${proc.destaque ? 'ring-2 ring-pami-blue' : ''}`}>
                <div className="relative h-64 w-full shrink-0">
                  <Image
                    src={imgData?.imageUrl || "/foto perfilpami.jpg"}
                    alt={`Dra. Pami - ${proc.nombre}`}
                    fill
                    className="object-contain p-4"
                    data-ai-hint={imgData?.imageHint || "pediatric dentistry"}
                    unoptimized={imgData?.imageUrl.startsWith('/')}
                  />
                  {proc.destaque && (
                    <div className="absolute top-4 right-4 bg-pami-blue text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Recomendado
                    </div>
                  )}
                </div>
                <CardContent className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#2D3142] mb-4">
                    {proc.nombre}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {proc.descripcion}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-pami-turquoise font-medium bg-pami-turquoise/5 p-3 rounded-xl mt-auto">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Tratamiento especializado</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-pami-orange/10 border-none rounded-[2rem] p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-white p-4 rounded-full shadow-sm">
                <Info className="h-8 w-8 text-pami-orange" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-[#2D3142] mb-2">Nota Importante</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Cada tratamiento es personalizado según las necesidades de tu hijo. En la consulta inicial evaluaremos el mejor camino para su salud bucal.
                </p>
              </div>
            </div>
          </Card>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-[#2D3142]">¿Tienes alguna duda o quieres agendar?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-pami-blue hover:bg-pami-blue/90 text-white rounded-full px-10 h-14 shadow-lg shadow-pami-blue/20">
                <a href="https://wa.link/5dmwvi" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Agendar por WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-10 border-pami-turquoise text-pami-turquoise hover:bg-pami-turquoise/10 h-14">
                <Link href="/">
                  Volver al Inicio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
