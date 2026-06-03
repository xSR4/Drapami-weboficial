'use server';

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

const AskDraPamiAIDentalAssistantInputSchema = z.string();
const AskDraPamiAIDentalAssistantOutputSchema = z.string();

const MODELS = ['gemini-2.5-flash', 'gemini-2.5-flash-lite'];

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isTemporaryGeminiError(error: unknown) {
  const err = error as {
    code?: number;
    status?: string;
    message?: string;
    originalMessage?: string;
  };

  const message = `${err.message ?? ''} ${err.originalMessage ?? ''}`.toLowerCase();

  return (
    err.code === 503 ||
    err.status === 'UNAVAILABLE' ||
    message.includes('503') ||
    message.includes('high demand') ||
    message.includes('service unavailable')
  );
}

async function generateWithFallback(prompt: string) {
  let lastError: unknown;

  for (const modelName of MODELS) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        return await ai.generate({
          model: googleAI.model(modelName),
          prompt,
        });
      } catch (error) {
        lastError = error;

        if (!isTemporaryGeminiError(error)) {
          throw error;
        }

        console.warn(
          `Modelo temporalmente no disponible: ${modelName}. Intento ${attempt}/2`
        );

        await sleep(800 * attempt);
      }
    }
  }

  throw lastError;
}

export async function askDraPamiAIDentalAssistant(input: string): Promise<string> {
  return askDraPamiAIDentalAssistantFlow(input);
}

const askDraPamiAIDentalAssistantFlow = ai.defineFlow(
  {
    name: 'askDraPamiAIDentalAssistantFlow',
    inputSchema: AskDraPamiAIDentalAssistantInputSchema,
    outputSchema: AskDraPamiAIDentalAssistantOutputSchema,
  },
  async (input) => {
    try {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error('Falta la variable de entorno GEMINI_API_KEY');
      }

      const prompt = `You are Dra. Pami's virtual assistant, an expert in Pediatric Dentistry (Odontopediatría). Your goal is to provide professional, warm, empathetic, and expert advice to parents about their children's dental health.

Guidelines:
- Tone: Professional, reassuring, warm, and child-centered.
- Audience: Parents worried about their children's teeth, from babies to teens.
- Focus: Baby teeth, first visit, prevention, brushing techniques for kids, and trauma advice.
- Language: Spanish.
- Important: Do not replace a real dentist. If the case seems urgent, recommend contacting a pediatric dentist.

Patient's Question: ${input}

Virtual Assistant's Advice:`;

      const response = await generateWithFallback(prompt);

      return response.text?.trim() || 'Lo siento, no pude generar una respuesta.';
    } catch (error) {
      console.error('--- ERROR EN GENKIT AI ---', error);
      throw error;
    }
  }
);

export async function getDraPamiAdvice(question: string) {
  'use server';

  try {
    const textoSeguro =
      question && question.trim() !== ''
        ? String(question)
        : 'Hola, ¿cómo cuido los dientes de mi bebé?';

    return await askDraPamiAIDentalAssistant(textoSeguro);
  } catch (error) {
    console.error('--- ERROR EN FLOW ---', error);

    return 'En este momento la asistente está recibiendo muchas consultas y no pudo responder. Por favor intenta nuevamente en unos minutos.';
  }
}