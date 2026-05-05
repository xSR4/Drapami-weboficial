
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Baby, ShieldCheck, Zap } from "lucide-react";

const treatments = [
  {
    title: "Primera Visita Dental",
    description: "Una experiencia de adaptación lúdica para que su primer encuentro con el dentista sea inolvidable y positivo.",
    color: "bg-pami-blue/10 text-pami-blue",
    icon: <Baby className="h-8 w-8" />,
    border: "hover:border-pami-blue/30"
  },
  {
    title: "Sellantes",
    description: "Protección efectiva contra las caries en los dientes definitivos recién erupcionados.",
    color: "bg-pami-pink/10 text-pami-pink",
    icon: <ShieldCheck className="h-8 w-8" />,
    border: "hover:border-pami-pink/30"
  },
  {
    title: "Limpiezas Dental Infantiles",
    description: "Eliminación de placa y educación sobre las técnicas de cepillado adaptada a su edad.",
    color: "bg-pami-turquoise/10 text-pami-turquoise",
    icon: <Sparkles className="h-8 w-8" />,
    border: "hover:border-pami-turquoise/30"
  },
  {
    title: "Tratamiento de Caries",
    description: "Restauraciones estéticas y funcionales utilizando técnicas mínimamente invasivas.",
    color: "bg-pami-orange/10 text-pami-orange",
    icon: <Zap className="h-8 w-8" />,
    border: "hover:border-pami-orange/30"
  }
];

export function Treatments() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3142]">Tratamientos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Desde el primer diente hasta la adolescencia, acompañamos el crecimiento de tus hijos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((t, i) => (
            <Card key={i} className={`border-2 border-transparent transition-all duration-300 rounded-[2rem] overflow-hidden soft-shadow ${t.border}`}>
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className={`${t.color} p-4 rounded-2xl mb-6`}>
                  {t.icon}
                </div>
                <h3 className="font-bold text-xl mb-4">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
