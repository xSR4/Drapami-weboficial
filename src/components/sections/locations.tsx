"use client";

import Image from "next/image";
import { Building2, Clock, MapPin, Phone, Play } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";

type Clinic = {
  name: string;
  address: string;
  reference?: string;
  phone: string;
  hours: string;
  image: string;
  principal?: boolean;
  youtubeId?: string;
};

const principalClinic: Clinic = {
  name: "Consultorio Principal - Lima",
  address: "Calle El Hábito 866 - San Juan de Lurigancho",
  reference: "Referencia: Altura de la estación Santa Rosa del tren eléctrico",
  phone: "+51 991 112 048",
  hours: "Lun - Sáb: 09:00 - 21:00",
  image: "clinic-1",
  principal: true,
  youtubeId: "9Pc3x4UjF0U",
};

const alliedClinics: Clinic[] = [
  {
    name: "Molar32 Niños - Sede Chorrillos",
    address: "Av. Guardia Peruana 431, Chorrillos",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-molar32",
  },
  {
    name: "Molar32 Niños - Sede Barranco",
    address: "Jr. San Ambrosio 420 - Barranco",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-molar32",
  },
  {
    name: "Clínica Karisma - Sede San Martín",
    address: "Av. Alfredo Mendiola 290 - San Martín de Porres",
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
    address: "Av. Alameda Los Cedros 275 Urb. Cedros de Villa - Chorrillos",
    phone: "+51 991 112 048",
    hours: "Previa Cita",
    image: "clinic-odontosonrisas",
  },
];

function getClinicImage(imageId: string) {
  if (imageId === "clinic-1") {
    return { src: "/logos/clinic-1.webp", hint: "dental clinic" };
  }

  const imgData = PlaceHolderImages.find((img) => img.id === imageId);

  return {
    src: imgData?.imageUrl || "https://picsum.photos/seed/dentist/600/400",
    hint: imgData?.imageHint || "dental clinic",
  };
}

function DirectionsLinks({ clinic }: { clinic: Clinic }) {
  const destination = encodeURIComponent(`${clinic.address}, Lima, Perú`);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${destination}`;
  const wazeUrl = `https://www.waze.com/ul?q=${destination}`;

  return (
    <div className="flex flex-wrap gap-3">
      <TrackedExternalLink
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        eventName="directions_click"
        eventParams={{
          placement: "locations",
          location: clinic.name,
          provider: "google_maps",
        }}
        aria-label={`Abrir ${clinic.name} en Google Maps`}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-pami-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pami-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue focus-visible:ring-offset-2"
      >
        <Image
          src="/logos/googlemaps.webp"
          alt=""
          width={22}
          height={22}
          className="h-[22px] w-[22px] object-contain"
        />
        Google Maps
      </TrackedExternalLink>

      <TrackedExternalLink
        href={wazeUrl}
        target="_blank"
        rel="noopener noreferrer"
        eventName="directions_click"
        eventParams={{
          placement: "locations",
          location: clinic.name,
          provider: "waze",
        }}
        aria-label={`Abrir ${clinic.name} en Waze`}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-pami-blue/30 bg-white px-5 py-2.5 text-sm font-semibold text-pami-blue transition-colors hover:bg-pami-blue/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue focus-visible:ring-offset-2"
      >
        <Image
          src="/logos/waze.webp"
          alt=""
          width={22}
          height={22}
          className="h-[22px] w-[22px] object-contain"
        />
        Waze
      </TrackedExternalLink>
    </div>
  );
}

function ClinicInfo({ clinic }: { clinic: Clinic }) {
  const phoneHref = clinic.phone.replace(/[^\d+]/g, "");

  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <MapPin
          className="mt-0.5 h-4 w-4 shrink-0 text-pami-turquoise"
          aria-hidden="true"
        />
        <div className="flex flex-col">
          <span>{clinic.address}</span>
          {clinic.reference && (
            <span className="mt-1 text-xs italic text-muted-foreground/80">
              {clinic.reference}
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Phone className="h-4 w-4 shrink-0 text-pami-turquoise" aria-hidden="true" />
        <TrackedExternalLink
          href={`tel:${phoneHref}`}
          eventName="phone_click"
          eventParams={{
            placement: "locations",
            location: clinic.name,
          }}
          className="transition-colors hover:text-pami-blue"
        >
          {clinic.phone}
        </TrackedExternalLink>
      </div>

      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Clock className="h-4 w-4 shrink-0 text-pami-turquoise" aria-hidden="true" />
        <span>{clinic.hours}</span>
      </div>

      <div className="border-t border-pami-blue/10 pt-4">
        <p className="mb-3 text-sm font-semibold text-[#2D3142]">¿Cómo llegar?</p>
        <DirectionsLinks clinic={clinic} />
      </div>
    </div>
  );
}

function PrincipalClinicCard({ clinic }: { clinic: Clinic }) {
  const image = getClinicImage(clinic.image);

  return (
    <Card className="soft-shadow overflow-hidden rounded-[2.5rem] border-none bg-white ring-2 ring-pami-blue transition-all hover:scale-[1.01]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {clinic.youtubeId ? (
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                aria-label={`Ver tour en video de ${clinic.name}`}
                className="group relative h-72 min-h-[320px] w-full cursor-pointer overflow-hidden border-0 bg-transparent p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue focus-visible:ring-offset-2 lg:h-full"
              >
                <Image
                  src={image.src}
                  alt={clinic.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                />

                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                  aria-hidden="true"
                >
                  <div className="rounded-full bg-white/95 p-5 shadow-lg transition-transform motion-safe:group-hover:scale-110">
                    <Play className="h-7 w-7 fill-current text-pami-blue" />
                  </div>
                  <span className="absolute bottom-5 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-pami-blue">
                    Ver tour virtual del consultorio
                  </span>
                </div>

                <div className="absolute right-5 top-5 rounded-full bg-pami-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                  Sede Principal
                </div>
              </button>
            </DialogTrigger>

            <DialogContent className="w-[calc(100%_-_2rem)] max-w-[400px] gap-0 overflow-hidden rounded-3xl border-none bg-white p-0 sm:rounded-3xl [&>button]:z-10 [&>button]:rounded-full [&>button]:bg-white [&>button]:p-2 [&>button]:opacity-100">
              <DialogTitle className="sr-only">Video tour de {clinic.name}</DialogTitle>

              <div
                className="relative mx-auto aspect-[9/16] w-full bg-black"
                style={{ maxWidth: "calc(85dvh * 9 / 16)" }}
              >
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${clinic.youtubeId}?autoplay=1&mute=1&playsinline=1&rel=0`}
                  title={`Video tour de ${clinic.name}`}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <div className="relative h-72 min-h-[320px] w-full overflow-hidden lg:h-full">
            <Image
              src={image.src}
              alt={clinic.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute right-5 top-5 rounded-full bg-pami-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
              Sede Principal
            </div>
          </div>
        )}

        <CardContent className="flex flex-col justify-center p-8 lg:p-10">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-pami-blue/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-pami-blue">
            <Building2 className="h-4 w-4" aria-hidden="true" />
            Consultorio Principal
          </div>
          <h3 className="mb-6 text-2xl font-bold text-[#2D3142] md:text-3xl">
            {clinic.name}
          </h3>
          <ClinicInfo clinic={clinic} />
        </CardContent>
      </div>
    </Card>
  );
}

function AlliedClinicCard({ clinic }: { clinic: Clinic }) {
  const image = getClinicImage(clinic.image);

  return (
    <Card className="soft-shadow h-full overflow-hidden rounded-[2rem] border-none bg-white transition-all hover:scale-[1.02]">
      <div className="relative h-48 w-full overflow-hidden bg-white">
        <Image
          src={image.src}
          alt={clinic.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center px-8 pb-5 pt-10"
          data-ai-hint={image.hint}
        />
        <div className="absolute right-4 top-4 rounded-full bg-pami-turquoise px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
          Clínica Aliada
        </div>
      </div>

      <CardContent className="p-7">
        <h3 className="mb-5 flex items-start gap-2 text-lg font-bold text-[#2D3142]">
          <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-pami-blue" aria-hidden="true" />
          {clinic.name}
        </h3>
        <ClinicInfo clinic={clinic} />
      </CardContent>
    </Card>
  );
}

export function Locations({ home = false }: { home?: boolean } = {}) {
  if (home) {
    return (
      <section className="bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-pami-pink/10 p-4 md:p-6">
          <h2 className="mb-5 text-2xl font-bold text-[#2D3142] md:text-3xl">
            Visítanos en San Juan de Lurigancho
          </h2>
          <PrincipalClinicCard clinic={principalClinic} />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-pami-bgSoft/30 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-pami-blue/10 px-4 py-2 text-sm font-bold uppercase tracking-wider text-pami-blue">
            Nuestras Sedes
          </span>
          <h2 className="mb-4 text-3xl font-bold text-[#2D3142] md:text-4xl">
            ¿Dónde encontrarnos?
          </h2>
        </div>

        <div className="mb-20">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="mb-2 text-2xl font-bold text-[#2D3142] md:text-3xl">
              Consultorio Principal
            </h3>
            <p className="text-muted-foreground">
              Nuestra sede principal está diseñada para que los niños se sientan cómodos,
              tranquilos y seguros durante su atención dental.
            </p>
          </div>
          <PrincipalClinicCard clinic={principalClinic} />
        </div>

        <div>
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h3 className="mb-2 text-2xl font-bold text-[#2D3142] md:text-3xl">
              Clínicas Aliadas
            </h3>
            <p className="text-muted-foreground">
              También puedes encontrarnos en clínicas aliadas ubicadas en diferentes zonas de Lima.
              La atención es previa cita.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {alliedClinics.map((clinic) => (
              <AlliedClinicCard key={`${clinic.name}-${clinic.address}`} clinic={clinic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}