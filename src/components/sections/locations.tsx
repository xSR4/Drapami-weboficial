
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Phone, Clock, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const clinics = [
  {
    name: "Consultorio Principal - Lima",
    address: "San Juan de Lurigancho, Lima, Perú",
    phone: "+51 991 112 048",
    hours: "Lun - Sáb: 09:00 - 19:00",
    image: "clinic-1",
    principal: true
  },
  {
    name: "Molar32 niños - Sede Chorrillos",
    address: "Av. Guardia Peruana 431, Chorrillos",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-molar32-chorrillos"
  },
  {
    name: "Molar32 niños - Sede Barranco",
    address: "Jr. San Ambrosio 420 - Barranco",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-molar32-barranco"
  },
  {
    name: "Clínica Karisma - Sede San Martín",
    address: "San Martín de Porres, Lima (Dirección por confirmar)",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-karisma-sm"
  },
  {
    name: "Clínica Karisma - Sede Pueblo Libre",
    address: "Pueblo Libre, Lima (Dirección por confirmar)",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-karisma-pl"
  },
  {
    name: "Odontosonrisas - Sede Chorrillos",
    address: "Av. Alameda los Cedros 275 Urb. Cedros de Villa - Chorrillos",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-odontosonrisas"
  }
];

export function Locations() {
  return (
    <section className="py-20 bg-pami-bgSoft/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-pami-blue/10 text-pami-blue font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
            Nuestras Sedes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3142]">¿Dónde encontrarnos?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendemos en nuestro consultorio principal y en prestigiosas clínicas aliadas para estar más cerca de ti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinics.map((clinic, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === clinic.image);
            const isLocal = imgData?.imageUrl.startsWith('/');
            
            return (
              <Card key={index} className={`border-none soft-shadow rounded-[2.5rem] overflow-hidden bg-white transition-all hover:scale-[1.02] ${clinic.principal ? 'ring-2 ring-pami-blue' : ''}`}>
                <div className="relative h-56 w-full">
                  <Image
                    src={imgData?.imageUrl || "https://picsum.photos/seed/dentist/600/400"}
                    alt={clinic.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    data-ai-hint={imgData?.imageHint || "dental clinic"}
                    unoptimized={isLocal}
                  />
                  {clinic.principal && (
                    <div className="absolute top-4 right-4 bg-pami-blue text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Sede Principal
                    </div>
                  )}
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-[#2D3142] flex items-start gap-2">
                    <Building2 className="h-5 w-5 text-pami-blue shrink-0 mt-1" />
                    {clinic.name}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <MapPin className="h-4 w-4 text-pami-turquoise shrink-0 mt-0.5" />
                      <span>{clinic.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-pami-turquoise shrink-0" />
                      <span>{clinic.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-pami-turquoise shrink-0" />
                      <span>{clinic.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
