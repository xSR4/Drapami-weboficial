
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Smile, Brush, ShieldCheck } from "lucide-react";

const treatments = [
  {
    title: "Ortodoncia Invisible",
    description: "Corrige tu sonrisa de forma discreta con los métodos más modernos de alineadores.",
    color: "bg-pami-purple/10 text-pami-purple",
    icon: <Smile className="h-8 w-8" />,
    border: "hover:border-pami-purple/30"
  },
  {
    title: "Estética Dental",
    description: "Diseño de sonrisa personalizado con carillas de alta calidad y blanqueamiento láser.",
    color: "bg-pami-pink/10 text-pami-pink",
    icon: <Sparkles className="h-8 w-8" />,
    border: "hover:border-pami-pink/30"
  },
  {
    title: "Limpieza Profunda",
    description: "Prevención avanzada mediante técnicas de ultrasonido para una salud óptima.",
    color: "bg-pami-turquoise/10 text-pami-turquoise",
    icon: <Brush className="h-8 w-8" />,
    border: "hover:border-pami-turquoise/30"
  },
  {
    title: "Implantes y Cirugía",
    description: "Restauración funcional con materiales biocompatibles y procesos mínimamente invasivos.",
    color: "bg-pami-orange/10 text-pami-orange",
    icon: <ShieldCheck className="h-8 w-8" />,
    border: "hover:border-pami-orange/30"
  }
];

export function Treatments() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Tratamientos Innovadores</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Utilizamos tecnología de punta para asegurar resultados duraderos y una experiencia cómoda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((t, i) => (
            <Card key={i} className={`border-2 border-transparent transition-all duration-300 rounded-3xl overflow-hidden soft-shadow ${t.border}`}>
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
