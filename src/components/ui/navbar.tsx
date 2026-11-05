"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nuestro-equipo", label: "Nuestro equipo" },
    { href: "/tratamientos", label: "Tratamientos" },
    { href: "/sedacion", label: "Sedación" },
    { href: "/experiencias", label: "Experiencias" },
    { href: "/sedes", label: "Sedes" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pami-blue/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-30">
            <Image
              src="/logos/logopami.png"
              alt="Dra. Pami Logo"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Menú de escritorio */}
        <div className="hidden lg:flex items-center gap-6 font-semibold text-sm text-[#2D3142]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                pathname === link.href ? "page" : undefined
              }
              className="hover:text-pami-blue transition-colors text-nowrap aria-[current=page]:text-pami-blue"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Botón de WhatsApp */}
          <Button
            asChild
            className="bg-pami-blue hover:bg-pami-blue/90 text-white rounded-full hidden sm:flex items-center gap-2 h-11 px-6 shadow-md shadow-pami-blue/20"
          >
            <TrackedExternalLink
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventParams={{
                placement: "navbar_desktop",
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Agendar Cita
            </TrackedExternalLink>
          </Button>

          {/* Menú móvil */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#2D3142] hover:bg-pami-blue/5"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">
                    Abrir menú
                  </span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] border-l-pami-blue/10 bg-white"
              >
                <div className="flex flex-col gap-8 mt-12">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/logos/logopami.png"
                      alt="Dra. Pami Logo"
                      width={120}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                  </div>

                  <nav className="flex flex-col gap-6 text-center">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={
                          pathname === link.href
                            ? "page"
                            : undefined
                        }
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-semibold text-[#2D3142] hover:text-pami-blue transition-colors aria-[current=page]:text-pami-blue"
                      >
                        {link.label}
                      </Link>
                    ))}

                    <Button
                      asChild
                      className="bg-pami-blue hover:bg-pami-blue/90 text-white rounded-full flex items-center justify-center gap-2 h-14 mt-4 shadow-lg shadow-pami-blue/20"
                    >
                      <TrackedExternalLink
                        href={siteConfig.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        eventName="whatsapp_click"
                        eventParams={{
                          placement: "navbar_mobile",
                        }}
                      >
                        <MessageCircle className="h-5 w-5" />
                        Agendar Cita
                      </TrackedExternalLink>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}