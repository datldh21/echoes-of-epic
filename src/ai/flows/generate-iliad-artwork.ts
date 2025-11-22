'use server';

/**
 * @fileOverview Generates AI artwork depicting key scenes from the Iliad.
 *
 * - generateIliadArtwork - A function that generates AI artwork based on a text prompt.
 * - GenerateIliadArtworkInput - The input type for the generateIliadArtwork function.
 * - GenerateIliadArtworkOutput - The return type for the generateIliadArtwork function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateIliadArtworkInputSchema = z.object({
  sceneDescription: z
    .string()
    .describe('A description of the scene from the Iliad to visualize.'),
});
export type GenerateIliadArtworkInput = z.infer<
  typeof GenerateIliadArtworkInputSchema
>;

const GenerateIliadArtworkOutputSchema = z.object({
  artworkDataUri: z
    .string()
    .describe(
      'The AI-generated artwork as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // data URI
    ),
});
export type GenerateIliadArtworkOutput = z.infer<
  typeof GenerateIliadArtworkOutputSchema
>;

export async function generateIliadArtwork(
  input: GenerateIliadArtworkInput
): Promise<GenerateIliadArtworkOutput> {
  return generateIliadArtworkFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateIliadArtworkPrompt',
  input: {schema: GenerateIliadArtworkInputSchema},
  output: {schema: GenerateIliadArtworkOutputSchema},
  prompt: `You are an AI artist specializing in generating images depicting scenes from ancient Greek epics, especially the Iliad.\n
  Generate an image based on the following scene description:\n  {{{sceneDescription}}}\n  `,
});

const generateIliadArtworkFlow = ai.defineFlow(
  {
    name: 'generateIliadArtworkFlow',
    inputSchema: GenerateIliadArtworkInputSchema,
    outputSchema: GenerateIliadArtworkOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.sceneDescription,
    });
    return {artworkDataUri: media.url!};
  }
);
