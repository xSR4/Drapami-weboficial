"use client";

import Image from "next/image";
import { Play } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getYouTubeId } from "@/lib/experiences";

type SedationVideoProps = {
  image: string;
  title: string;
  youtubeUrl?: string;
};

export function SedationVideo({
  image,
  title,
  youtubeUrl,
}: SedationVideoProps) {
  const videoId = youtubeUrl ? getYouTubeId(youtubeUrl) : null;

  const photo = (
    <Image
      src={image}
      alt={title}
      fill
      sizes="(max-width: 767px) 100vw, 50vw"
      className="object-contain bg-pami-bgSoft/10 p-4"
    />
  );

  return (
    <div className="relative h-80 min-h-[400px] md:h-auto md:w-1/2">
      {videoId ? (
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              aria-label={`Ver video de ${title}`}
              className="group absolute inset-0 block w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pami-blue"
            >
              {photo}

              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity motion-reduce:transition-none [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-white text-pami-blue shadow-lg">
                  <Play className="ml-0.5 size-6 fill-current" />
                </span>

                <span className="absolute bottom-6 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2D3142] shadow">
                  Conoce más sobre la sedación
                </span>
              </span>
            </button>
          </DialogTrigger>

          <DialogContent
            aria-describedby={undefined}
            className="w-[calc(100%_-_2rem)] max-w-[360px] gap-0 overflow-hidden rounded-3xl border-0 bg-white p-0 [&>button]:z-10 [&>button]:rounded-full [&>button]:bg-white [&>button]:p-2 [&>button]:opacity-100"
          >
            <DialogTitle className="sr-only">{title}</DialogTitle>

            <div className="relative mx-auto aspect-[9/16] w-full max-w-[45dvh] bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1`}
                title={`Video de ${title}`}
                className="absolute inset-0 size-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            
          </DialogContent>
        </Dialog>
      ) : (
        photo
      )}
    </div>
  );
}