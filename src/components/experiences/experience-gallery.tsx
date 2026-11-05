"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowUpRight,
  Heart,
  MessageCircle,
  Play,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  getYouTubeId,
  type Experience,
} from "@/lib/experiences";

import { trackGAEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";
import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";

function FamilyQuote({
  quote,
  variant = "card",
}: {
  quote?: string;
  variant?: "card" | "modal";
}) {
  if (!quote) return null;

  return (
    <blockquote
      className={
        variant === "modal"
          ? "mt-5 rounded-2xl border border-pami-pink/15 bg-pami-pink/5 p-4"
          : "mt-4 border-t border-pami-pink/15 pt-4"
      }
    >
      <p className="mb-2 text-xs font-semibold text-pami-purple">
        Lo que comparte su familia
      </p>

      <p className="text-sm italic leading-relaxed text-muted-foreground">
        “{quote}”
      </p>
    </blockquote>
  );
}

function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  const [open, setOpen] = useState(false);
  const videoId = getYouTubeId(experience.youtubeUrl);

  if (!videoId) return null;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-pami-blue/10 bg-white soft-shadow">
      <Dialog
        open={open}
        onOpenChange={(value) => {
          setOpen(value);

          if (value) {
            trackGAEvent("experience_video_open", {
              experience_id: experience.id,
              video_id: videoId,
            });
          }
        }}
      >
        {/* Fotografía de la tarjeta */}
        <DialogTrigger asChild>
          <button
            type="button"
            aria-label={`Ver la historia de ${experience.childName}`}
            className="group relative block aspect-[4/5] w-full overflow-hidden bg-pami-bgSoft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-pami-blue"
          >
            <Image
              src={experience.photo}
              alt={experience.photoAlt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
            />

            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <span
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-pami-blue shadow-lg">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </span>

            <span className="absolute bottom-5 left-5 right-5 flex">
              <span className="max-w-full rounded-full bg-white px-4 py-2 text-left text-sm font-semibold text-[#2D3142]">
                Ver la historia de {experience.childName}
              </span>
            </span>
          </button>
        </DialogTrigger>

        {/* Ventana del video: barra oculta, desplazamiento disponible */}
        <DialogContent className="max-h-[92dvh] w-[calc(100%_-_1.5rem)] max-w-4xl gap-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-[1.75rem] border border-pami-blue/15 bg-white p-0 shadow-2xl sm:rounded-[1.75rem]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Video vertical */}
            <div className="relative bg-black">
              <div className="relative mx-auto aspect-[9/16] max-h-[60dvh] w-full md:max-h-none">
                {open && (
                  <iframe
                    key={videoId}
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&rel=0`}
                    title={`Historia de ${experience.childName} con Dra. Pami`}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* Historia, testimonio y WhatsApp */}
            <div className="flex flex-col p-6 md:p-8">
              <div className="pr-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-pami-purple">
                  Experiencias Dra. Pami Odontopediatría
                </p>

                <DialogTitle className="text-2xl font-bold leading-tight text-[#2D3142]">
                  {experience.title}
                </DialogTitle>

                <DialogDescription className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {experience.description}
                </DialogDescription>
              </div>

              <FamilyQuote
                quote={experience.familyQuote}
                variant="modal"
              />

              <div className="mt-6 rounded-2xl border border-pami-blue/10 bg-pami-bgSoft/50 p-4">
                <p className="text-sm font-semibold text-[#2D3142]">
                  {experience.childName}
                  {experience.ageLabel
                    ? ` · ${experience.ageLabel}`
                    : ""}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Especialista:</span>{" "}
                  Dra. Miriam Zevallos - Dra. Pami
                </p>

                {experience.location && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="font-semibold">Sede:</span>{" "}
                    {experience.location}
                  </p>
                )}
              </div>

              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-pami-blue underline underline-offset-4"
              >
                Ver en YouTube
                <ArrowUpRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </a>

              <div className="mt-auto pt-8">
                <TrackedExternalLink
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  eventParams={{
                    placement: "experience_modal",
                    experience_id: experience.id,
                  }}
                  className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-pami-blue px-5 py-3 text-center font-bold text-white shadow-md transition-colors hover:bg-pami-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pami-blue focus-visible:ring-offset-2"
                >
                  <MessageCircle
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                  Agendar tu cita
                </TrackedExternalLink>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Información de la tarjeta */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs">
          <span className="rounded-full bg-pami-blue/5 px-3 py-1.5 font-medium text-[#2D3142]">
            {experience.childName}
            {experience.ageLabel
              ? ` · ${experience.ageLabel}`
              : ""}
          </span>

          {experience.location && (
            <span className="text-muted-foreground">
              {experience.location}
            </span>
          )}
        </div>

        <h2 className="mb-3 text-xl font-bold leading-snug text-[#2D3142]">
          {experience.title}
        </h2>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {experience.description}
        </p>

        <FamilyQuote quote={experience.familyQuote} />
      </div>
    </article>
  );
}

export function ExperienceGallery({
  experiences,
}: {
  experiences: Experience[];
}) {
  const available = experiences.filter((experience) =>
    getYouTubeId(experience.youtubeUrl)
  );

  if (!available.length) {
    return (
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-pami-pink/15 bg-white px-6 py-12 text-center soft-shadow">
        <Heart
          className="mx-auto mb-4 h-9 w-9 text-pami-pink"
          aria-hidden="true"
        />

        <h2 className="mb-3 text-2xl font-bold text-[#2D3142]">
          Cada pequeño tiene una historia especial
        </h2>

        <p className="leading-relaxed text-muted-foreground">
          Muy pronto compartiremos aquí experiencias de nuestras
          familias y los momentos que hacen especial cada visita
          a Dra. Pami.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {available.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
}