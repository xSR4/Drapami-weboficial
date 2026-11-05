"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Story = {
  id: string;
  name: string;
  image: string;
};

type ExperienceCarouselProps = {
  stories: Story[];
};

const intervalMs = 2500;
const transitionMs = 400;

export function ExperienceCarousel({ stories }: ExperienceCarouselProps) {
  const [start, setStart] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);

  const count = stories.length;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setReducedMotion(preference.matches);

    syncPreference();
    preference.addEventListener("change", syncPreference);

    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (count < 2 || hovered || focused || reducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setSliding(true);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [count, hovered, focused, reducedMotion]);

  useEffect(() => {
    if (!sliding) {
      return;
    }

    const timer = window.setTimeout(() => {
      setStart((current) => (count > 0 ? (current + 1) % count : 0));
      setSliding(false);
    }, reducedMotion ? 0 : transitionMs);

    return () => window.clearTimeout(timer);
  }, [count, reducedMotion, sliding]);

  if (count === 0) {
    return null;
  }

  const visibleStories =
    count === 1
      ? stories
      : [0, 1, 2].map((offset) => stories[(start + offset) % count]);

  return (
    <div
      className="relative aspect-[9/8] w-full overflow-hidden rounded-2xl [--story-gap:0.75rem] sm:[--story-gap:1rem] md:aspect-auto md:min-h-0 md:flex-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setFocused(false);
        }
      }}
    >
      <div
        className="absolute inset-0 flex gap-[var(--story-gap)]"
        style={{
          transform:
            sliding && count > 1
              ? "translateX(calc(-50% - var(--story-gap) / 2))"
              : "translateX(0)",
          transition:
            sliding && !reducedMotion
              ? `transform ${transitionMs}ms ease-in-out`
              : "none",
        }}
      >
        {visibleStories.map(({ id, name, image }, index) => (
          <Link
            key={`${id}-${index}`}
            href="/experiencias"
            aria-label={`Ver la historia de ${name} en Experiencias`}
            aria-hidden={index === 2 ? true : undefined}
            tabIndex={index === 2 ? -1 : undefined}
            className="relative block h-full shrink-0 overflow-hidden rounded-2xl bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pami-blue"
            style={{
              width:
                count === 1
                  ? "100%"
                  : "calc((100% - var(--story-gap)) / 2)",
            }}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes={
                count === 1
                  ? "(max-width: 767px) 90vw, (max-width: 1327px) 58vw, 690px"
                  : "(max-width: 767px) 45vw, (max-width: 1327px) 29vw, 340px"
              }
              className="object-cover object-center"
            />

            <span className="absolute bottom-2 left-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#2D3142]">
              {name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}