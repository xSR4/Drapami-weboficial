
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Phone, Clock } from "lucide-react";

const clinics = [
  {
    name: "Clínica Pami - Sede Norte",
    address: "Av. Salud Dental 450, Piso 2",
    phone: "+54 11 4444-5555",
    hours: "Lun - Vie: 09:00 - 18:00",
    image: "clinic-1"
  },
  {
    name: "Clínica Pami - Sede Central",
    address: "Calle Sonrisa Feliz 120",
    phone: "+54 11 4444-8888",
    hours: "Lun - Sab: 10:00 - 20:00",
    image: "clinic-2"
  }
];

export function Locations() {
  return (
    <section className="py-20 bg-pami-bgSoft/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Nuestras Sedes</h2>
          <p className="text-muted-foreground">Encuentra el consultorio más cercano a ti.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {clinics.map((clinic, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === clinic.image);
            return (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden soft-shadow flex flex-col sm:flex-row border border-pami-blue/5">
                <div className="sm:w-2/5 relative h-48 sm:h-auto">
                  <Image
                    src={imgData?.imageUrl || ""}
                    alt={clinic.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4 text-pami-blue">{clinic.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-pami-turquoise" />
                      <span>{clinic.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 text-pami-turquoise" />
                      <span>{clinic.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 text-pami-turquoise" />
                      <span>{clinic.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
