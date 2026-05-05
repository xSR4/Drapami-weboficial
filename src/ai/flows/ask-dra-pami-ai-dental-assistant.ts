
'use server';
/**
 * @fileOverview An AI assistant specialized in pediatric dentistry.
 *
 * - askDraPamiAIDentalAssistant - A function that handles parent queries for pediatric dental advice.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskDraPamiAIDentalAssistantInputSchema = z
  .string()
  .describe('The parent\'s question regarding pediatric dental hygiene, baby teeth, or child treatments.');
export type AskDraPamiAIDentalAssistantInput = z.infer<
  typeof AskDraPamiAIDentalAssistantInputSchema
>;

const AskDraPamiAIDentalAssistantOutputSchema = z
  .string()
  .describe('The expert pediatric dental advice provided by Dra. Pami\'s virtual assistant.');
export type AskDraPamiAIDentalAssistantOutput = z.infer<
  typeof AskDraPamiAIDentalAssistantOutputSchema
>;

export async function askDraPamiAIDentalAssistant(
  input: AskDraPamiAIDentalAssistantInput
): Promise<AskDraPamiAIDentalAssistantOutput> {
  return askDraPamiAIDentalAssistantFlow(input);
}

const askDraPamiPrompt = ai.definePrompt({
  name: 'askDraPamiAIDentalAssistantPrompt',
  input: {schema: AskDraPamiAIDentalAssistantInputSchema},
  output: {schema: AskDraPamiAIDentalAssistantOutputSchema},
  prompt: `You are Dra. Pami's virtual assistant, an expert in Pediatric Dentistry (Odontopediatría). Your goal is to provide professional, warm, empathetic, and expert advice to parents about their children's dental health.

Guidelines:
- Tone: Professional, reassuring, warm, and child-centered.
- Audience: Parents worried about their children's teeth (from babies to teens).
- Focus: Baby teeth (dientes de leche), first visit, prevention, brushing techniques for kids, and trauma advice.
- Language: Spanish.

Patient's Question: {{{.}}}

Virtual Assistant's Advice:`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_NONE',
      },
    ],
  },
});

const askDraPamiAIDentalAssistantFlow = ai.defineFlow(
  {
    name: 'askDraPamiAIDentalAssistantFlow',
    inputSchema: AskDraPamiAIDentalAssistantInputSchema,
    outputSchema: AskDraPamiAIDentalAssistantOutputSchema,
  },
  async input => {
    const {output} = await askDraPamiPrompt(input);
    return output!;
  }
);
