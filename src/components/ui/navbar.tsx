
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-pami-blue/10">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-12 w-30">
            <Image
              src="/logopami.png"
              alt="Dra. Pami Logo"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
              unoptimized
            />
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-6 font-semibold text-sm text-[#2D3142]">
          <Link href="/" className="hover:text-pami-blue transition-colors">Inicio</Link>
          <Link href="/tratamientos" className="hover:text-pami-blue transition-colors text-nowrap">Tratamientos</Link>
          <Link href="/sedacion" className="hover:text-pami-blue transition-colors text-nowrap">Sedación</Link>
          <Link href="/#capacitaciones" className="hover:text-pami-blue transition-colors text-nowrap">Capacitaciones</Link>
          <Link href="/#sedes" className="hover:text-pami-blue transition-colors text-nowrap">Sedes</Link>
        </div>
        <Button asChild className="bg-pami-blue hover:bg-pami-blue/90 text-white rounded-full hidden sm:flex items-center gap-2 h-11 px-6 shadow-md shadow-pami-blue/20">
          <a href="https://wa.link/5dmwvi" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Agendar Cita
          </a>
        </Button>
      </div>
    </nav>
  );
}
