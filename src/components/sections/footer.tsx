import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-20">
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-headline font-bold mb-6">Contáctanos</h2>
            <p className="text-muted-foreground mb-8">
              Estamos aquí para resolver cualquier duda. Envíanos un mensaje y te responderemos lo antes posible.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-pami-blue/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-pami-blue" />
                </div>
                <span className="font-medium">+54 11 4444-5555</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-pami-turquoise/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-pami-turquoise" />
                </div>
                <span className="font-medium">hola@drapami.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-pami-pink/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-pami-pink" />
                </div>
                <span className="font-medium">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <div className="bg-pami-bgSoft/50 p-8 rounded-[2rem] border border-pami-blue/5">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Nombre completo" className="rounded-xl bg-white border-none shadow-sm h-12" />
                <Input placeholder="Correo electrónico" type="email" className="rounded-xl bg-white border-none shadow-sm h-12" />
              </div>
              <Input placeholder="Asunto" className="rounded-xl bg-white border-none shadow-sm h-12" />
              <Textarea placeholder="Tu mensaje..." className="rounded-xl bg-white border-none shadow-sm min-h-[120px]" />
              <Button className="w-full bg-pami-blue hover:bg-pami-blue/90 text-white rounded-xl h-12 font-bold">
                Enviar Consulta
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-gradient">
            Dra. Pami
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-pami-blue transition-colors" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-pami-blue transition-colors" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-[#000000] transition-colors" aria-label="TikTok">
              <svg 
                viewBox="0 0 24 24" 
                className="h-6 w-6 fill-current" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.09-1.47-.88-.64-1.61-1.47-2.12-2.44v.01c-.02 2.33.04 4.66-.03 6.99-.13 2.57-1.41 5.06-3.65 6.32-1.9 1.08-4.38 1.25-6.38.44-2.1-.84-3.71-2.73-4.18-4.94-.46-2.19.12-4.63 1.54-6.37 1.4-1.72 3.63-2.71 5.84-2.58v4.03c-1.14-.14-2.33.15-3.21.91-.9.76-1.39 1.96-1.31 3.12.04 1.12.55 2.2 1.44 2.88.94.72 2.21.93 3.35.54 1.08-.37 1.93-1.28 2.22-2.39.12-.48.14-.98.14-1.47V.02z"/>
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-pami-blue transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dra. Pami. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
