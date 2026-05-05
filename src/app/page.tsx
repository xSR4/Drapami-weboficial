
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Certifications } from "@/components/sections/certifications";
import { AIAssistant } from "@/components/sections/ai-assistant";
import { Education } from "@/components/sections/education";
import { Locations } from "@/components/sections/locations";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <div id="sobre-mi">
        <About />
      </div>
      <div id="capacitaciones">
        <Certifications />
      </div>
      <AIAssistant />
      <Education />
      <div id="sedes">
        <Locations />
      </div>
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
