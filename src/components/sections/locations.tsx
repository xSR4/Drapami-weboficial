"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  MapPin,
  Phone,
  Clock,
  Building2,
  Play,
  Video,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

type Clinic = {
  name: string;
  address: string;
  reference?: string;
  phone: string;
  hours: string;
  image: string;
  principal?: boolean;
  tiktokId?: string;
};

const principalClinic: Clinic = {
  name: "Consultorio Principal - Lima",
  address: "Calle el habito 866 - San Juan de Lurigancho",
  reference: "Referencia: Altura de la estación Santa Rosa del tren eléctrico",
  phone: "+51 991 112 048",
  hours: "Lun - Sáb: 09:00 - 19:00",
  image: "clinic-1",
  principal: true,
  tiktokId: "7462582393212259590",
};

const alliedClinics: Clinic[] = [
  {
    name: "Molar32 niños - Sede Chorrillos",
    address: "Av. Guardia Peruana 431, Chorrillos",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-molar32",
  },
  {
    name: "Molar32 niños - Sede Barranco",
    address: "Jr. San Ambrosio 420 - Barranco",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-molar32",
  },
  {
    name: "Clínica Karisma - Sede San Martín",
    address: "Av. Alfredo Mendiola 290 - San Martin de Porres",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-karisma",
  },
  {
    name: "Clínica Karisma - Sede Pueblo Libre",
    address: "Av. Brasil 1644 - Pueblo Libre",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-karisma",
  },
  {
    name: "Odontosonrisas - Sede Chorrillos",
    address: "Av. Alameda los Cedros 275 Urb. Cedros de Villa - Chorrillos",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-odontosonrisas",
  },
];

function getClinicImage(imageId: string) {
  const imgData = PlaceHolderImages.find((img) => img.id === imageId);

  return {
    src: imgData?.imageUrl || "https://picsum.photos/seed/dentist/600/400",
    hint: imgData?.imageHint || "dental clinic",
    isLocal: Boolean(imgData?.imageUrl?.startsWith("/")),
  };
}

function ClinicInfo({ clinic }: { clinic: Clinic }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
        <MapPin className="h-4 w-4 text-pami-turquoise shrink-0 mt-0.5" />
        <div className="flex flex-col">
          <span>{clinic.address}</span>

          {clinic.reference && (
            <span className="text-xs text-muted-foreground/80 mt-1 italic">
              {clinic.reference}
            </span>
          )}
        </div>
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
  );
}

function PrincipalClinicCard({ clinic }: { clinic: Clinic }) {
  const image = getClinicImage(clinic.image);

  const card = (
    <Card className="border-none soft-shadow rounded-[2.5rem] overflow-hidden bg-white transition-all hover:scale-[1.01] ring-2 ring-pami-blue">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-72 lg:h-full min-h-[320px] w-full group overflow-hidden">
          <Image
            src={image.src}
            alt={clinic.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={image.hint}
            unoptimized={image.isLocal}
          />

          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <div className="bg-white/90 p-5 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform">
              <Play className="h-7 w-7 text-pami-blue fill-current" />
            </div>

            <span className="absolute bottom-5 bg-white/90 text-pami-blue text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Ver Tour Video
            </span>
          </div>

          <div className="absolute top-5 right-5 bg-pami-blue text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Sede Principal
          </div>
        </div>

        <CardContent className="p-8 lg:p-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-pami-blue/10 text-pami-blue font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider mb-5 w-fit">
            <Building2 className="h-4 w-4" />
            Consultorio Principal
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#2D3142]">
            {clinic.name}
          </h3>

          <ClinicInfo clinic={clinic} />

          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-pami-blue">
            <Video className="h-4 w-4" />
            Haz clic para ver el tour del consultorio
          </div>
        </CardContent>
      </div>
    </Card>
  );

  if (clinic.tiktokId) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer">{card}</div>
        </DialogTrigger>

        <DialogContent className="max-w-[400px] p-0 bg-transparent border-none overflow-hidden rounded-3xl">
          <DialogTitle className="sr-only">
            Video Tour: {clinic.name}
          </DialogTitle>

          <div className="aspect-[9/16] w-full bg-black">
            <iframe
              src={`https://www.tiktok.com/embed/v2/${clinic.tiktokId}`}
              className="w-full h-full border-none"
              allow="fullscreen"
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return card;
}

function AlliedClinicCard({ clinic }: { clinic: Clinic }) {
  const image = getClinicImage(clinic.image);

  return (
    <Card className="border-none soft-shadow rounded-[2rem] overflow-hidden bg-white transition-all hover:scale-[1.02] h-full">
      <div className="relative h-48 w-full group overflow-hidden">
        <Image
          src={image.src}
          alt={clinic.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={image.hint}
          unoptimized={image.isLocal}
        />

        <div className="absolute top-4 right-4 bg-pami-turquoise text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
          Clínica Aliada
        </div>
      </div>

      <CardContent className="p-7">
        <h3 className="text-lg font-bold mb-5 text-[#2D3142] flex items-start gap-2">
          <Building2 className="h-5 w-5 text-pami-blue shrink-0 mt-0.5" />
          {clinic.name}
        </h3>

        <ClinicInfo clinic={clinic} />
      </CardContent>
    </Card>
  );
}

export function Locations() {
  return (
    <section className="py-20 bg-pami-bgSoft/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="bg-pami-blue/10 text-pami-blue font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider mb-4 inline-block">
            Nuestras Sedes
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D3142]">
            ¿Dónde encontrarnos?
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Atendemos en nuestro consultorio principal y en prestigiosas clínicas
            aliadas para estar más cerca de ti.
          </p>
        </div>

        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2D3142] mb-2">
              Consultorio Principal
            </h3>

            <p className="text-muted-foreground max-w-2xl">
              Nuestra sede principal está diseñada para que los niños se sientan
              cómodos, tranquilos y seguros durante su atención dental.
            </p>
          </div>

          <PrincipalClinicCard clinic={principalClinic} />
        </div>

        <div>
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2D3142] mb-2">
              Clínicas Aliadas
            </h3>

            <p className="text-muted-foreground max-w-2xl">
              También puedes encontrarnos en clínicas aliadas ubicadas en
              diferentes zonas de Lima. La atención es previa cita.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {alliedClinics.map((clinic) => (
              <AlliedClinicCard key={`${clinic.name}-${clinic.address}`} clinic={clinic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}