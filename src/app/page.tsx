
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Treatments } from "@/components/sections/treatments";
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
      <About />
      <Treatments />
      <Certifications />
      <AIAssistant />
      <Education />
      <Locations />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
