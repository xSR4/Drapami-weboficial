
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { askDraPamiAIDentalAssistant } from "@/ai/flows/ask-dra-pami-ai-dental-assistant";
import { Loader2, Send, Sparkles } from "lucide-react";

export function AIAssistant() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const advice = await askDraPamiAIDentalAssistant(input);
      setResponse(advice);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setResponse("Lo siento, hubo un problema al procesar tu consulta. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-pami-blue/5 to-pami-turquoise/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-pami-blue text-white p-8">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="h-6 w-6" />
              <CardTitle className="text-2xl">Asistente Virtual Dra. Pami</CardTitle>
            </div>
            <CardDescription className="text-white/80 text-base">
              ¿Tienes alguna duda rápida sobre tu salud dental? Pregúntale a mi IA y recibe consejos expertos al instante.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 bg-white">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
              <div className="relative">
                <Input
                  placeholder="Ej: ¿Cómo debo cuidar mis brackets?"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="rounded-full py-6 pl-6 pr-16 bg-pami-bgSoft border-none focus-visible:ring-pami-blue"
                  disabled={loading}
                />
                <Button 
                  type="submit" 
                  disabled={loading || !input}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 p-0 bg-pami-blue hover:bg-pami-blue/90"
                >
                  {loading ? <Loader2 className="animate-spin h-5 w-5" /> : <Send className="h-5 w-5" />}
                </Button>
              </div>
            </form>

            {response && (
              <div className="animate-fade-in-up p-6 rounded-2xl bg-pami-turquoise/5 border border-pami-turquoise/20">
                <p className="text-pami-blue font-bold text-sm mb-2">Respuesta Sugerida:</p>
                <div className="text-foreground leading-relaxed whitespace-pre-wrap italic">
                  "{response}"
                </div>
                <p className="text-[10px] text-muted-foreground mt-4 text-center">
                  *Esta información es orientativa. Consulta siempre en tu cita presencial.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
