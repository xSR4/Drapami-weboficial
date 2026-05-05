import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";

const procedimientos = [
  { nombre: "Consulta", precio: "30.00", destaque: true },
  { nombre: "Restauración simple", precio: "50.00" },
  { nombre: "Restauración Compuesta", precio: "75.00" },
  { nombre: "Restauraciones complejas", precio: "150.00" },
  { nombre: "Sellantes", precio: "40.00" },
  { nombre: "Extracción Simple", precio: "50.00" },
  { nombre: "Extracción Compleja", precio: "70.00" },
  { nombre: "Corona de Resina", precio: "125.00" },
  { nombre: "Corona de metal", precio: "120.00" },
  { nombre: "Frenectomía", precio: "250.00" },
  { nombre: "Pulpectomia", precio: "245.00" },
  { nombre: "Radiografía Periapical", precio: "12.00" },
  { nombre: "Profilaxis + Barniz", precio: "100.00" },
  { nombre: "Perno + Corona", precio: "185.00" },
  { nombre: "Evaluación de ortopedia", precio: "250.00" },
];

export default function TratamientosPage() {
  return (
    <main className="min-h-screen bg-pami-bgSoft/30 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3142] mb-4">Procedimientos Especializados</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos una amplia gama de procedimientos odontopediátricos con la tecnología más avanzada y un trato lleno de amor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {procedimientos.map((proc, index) => (
            <Card key={index} className={`border-none soft-shadow rounded-[2rem] overflow-hidden transition-all hover:scale-[1.02] ${proc.destaque ? 'ring-2 ring-pami-blue bg-white' : 'bg-white'}`}>
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#2D3142] leading-tight pr-4">
                      {proc.nombre}
                    </h3>
                    {proc.destaque && (
                      <span className="bg-pami-blue text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Recomendado
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-pami-blue">S/ {proc.precio}</span>
                    <span className="text-xs text-muted-foreground font-medium">+ IGV</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-pami-turquoise font-medium">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Tratamiento Garantizado</span>
                </div>
              </CardContent>
            </Card>
          ))}
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
                  *Si ya cuentas con un plan de tratamiento activo y solo vienes a realizar los procedimientos agendados, se <strong>exonera el costo de la consulta</strong>.
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
