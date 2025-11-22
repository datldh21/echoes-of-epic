'use server';

/**
 * @fileOverview Generates AI avatars for characters from the Iliad.
 *
 * - generateAvatar - A function that generates an AI avatar for a given character description.
 * - GenerateAvatarInput - The input type for the generateAvatar function.
 * - GenerateAvatarOutput - The return type for the generateAvatar function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAvatarInputSchema = z.object({
  characterDescription: z
    .string()
    .describe('A detailed description of the character from the Iliad.'),
});
export type GenerateAvatarInput = z.infer<typeof GenerateAvatarInputSchema>;

const GenerateAvatarOutputSchema = z.object({
  avatarDataUri: z
    .string()
    .describe(
      'The generated avatar as a data URI that must include a MIME type and use Base64 encoding. Expected format: data:<mimetype>;base64,<encoded_data>.'
    ),
});
export type GenerateAvatarOutput = z.infer<typeof GenerateAvatarOutputSchema>;

export async function generateAvatar(input: GenerateAvatarInput): Promise<GenerateAvatarOutput> {
  return generateAvatarFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAvatarPrompt',
  input: {schema: GenerateAvatarInputSchema},
  output: {schema: GenerateAvatarOutputSchema},
  prompt: `You are an artist specializing in creating avatars of characters from ancient Greek mythology, specifically the Iliad.  Create an avatar based on the following description: {{{characterDescription}}}. The avatar should resemble a profile picture from "ancient Facebook".`,
});

const generateAvatarFlow = ai.defineFlow(
  {
    name: 'generateAvatarFlow',
    inputSchema: GenerateAvatarInputSchema,
    outputSchema: GenerateAvatarOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: input.characterDescription,
    });
    if (!media || !media.url) {
      throw new Error('Failed to generate avatar.');
    }
    return {avatarDataUri: media.url!};
  }
);
