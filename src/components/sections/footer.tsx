
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

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
            <a href="#" className="text-muted-foreground hover:text-pami-blue transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-pami-blue transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-pami-blue transition-colors">
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
