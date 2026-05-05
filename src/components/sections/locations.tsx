import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Phone, Clock } from "lucide-react";

const clinics = [
  {
    name: "Consultorio Principal - Lima",
    address: "San Juan de Lurigancho, Lima, Perú",
    phone: "+51 991 112 048",
    hours: "Lun - Sáb: 09:00 - 19:00",
    image: "clinic-1"
  }
];

export function Locations() {
  return (
    <section className="py-20 bg-pami-bgSoft/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Nuestra Ubicación</h2>
          <p className="text-muted-foreground">Visítanos en nuestro consultorio especializado para niños.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          {clinics.map((clinic, index) => {
            const imgData = PlaceHolderImages.find(img => img.id === clinic.image);
            return (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden soft-shadow flex flex-col md:flex-row border border-pami-blue/5">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={imgData?.imageUrl || ""}
                    alt={clinic.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-10 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-6 text-pami-blue">{clinic.name}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="bg-pami-turquoise/10 p-2 rounded-lg">
                        <MapPin className="h-5 w-5 text-pami-turquoise" />
                      </div>
                      <span className="text-lg">{clinic.address}</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="bg-pami-turquoise/10 p-2 rounded-lg">
                        <Phone className="h-5 w-5 text-pami-turquoise" />
                      </div>
                      <span className="text-lg">{clinic.phone}</span>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="bg-pami-turquoise/10 p-2 rounded-lg">
                        <Clock className="h-5 w-5 text-pami-turquoise" />
                      </div>
                      <span className="text-lg">{clinic.hours}</span>
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