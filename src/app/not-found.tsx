import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackedExternalLink } from "@/components/analytics/tracked-external-link";
import { siteConfig } from "@/lib/site-config";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-pami-bgSoft/30 px-6 py-20">
      <div className="max-w-xl text-center bg-white rounded-[2rem] p-10 soft-shadow">
        <p className="text-pami-blue font-bold text-sm uppercase tracking-wider mb-3">Error 404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#2D3142] mb-4">Esta página no está disponible</h1>
        <p className="text-muted-foreground mb-8">
          Puedes volver al inicio o escribirnos por WhatsApp si necesitas ayuda para encontrar información o agendar una consulta.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="rounded-full bg-pami-blue hover:bg-pami-blue/90 text-white">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full border-pami-turquoise text-pami-turquoise">
            <TrackedExternalLink
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventParams={{ placement: "404_page" }}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contactar por WhatsApp
            </TrackedExternalLink>
          </Button>
        </div>
      </div>
    </main>
  );
}
