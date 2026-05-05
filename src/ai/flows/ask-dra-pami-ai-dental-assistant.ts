'use server';
/**
 * @fileOverview An AI assistant that provides expert-like advice on dental hygiene and treatments.
 *
 * - askDraPamiAIDentalAssistant - A function that handles patient queries for dental advice.
 * - AskDraPamiAIDentalAssistantInput - The input type for the askDraPamiAIDentalAssistant function.
 * - AskDraPamiAIDentalAssistantOutput - The return type for the askDraPamiAIDentalAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskDraPamiAIDentalAssistantInputSchema = z
  .string()
  .describe('The patient\u0027s question regarding dental hygiene or specific treatments.');
export type AskDraPamiAIDentalAssistantInput = z.infer<
  typeof AskDraPamiAIDentalAssistantInputSchema
>;

const AskDraPamiAIDentalAssistantOutputSchema = z
  .string()
  .describe('The expert-like advice provided by Dra. Pami\u0027s virtual assistant.');
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
  prompt: `You are Dra. Pami's virtual assistant, an expert in UX/UI design and web development, specifically tasked with providing professional, close, empathetic, and expert advice on dental hygiene and specific treatments.

Respond to the patient's question with comprehensive, clear, and reassuring guidance. Your tone should be professional yet warm and understanding.

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
