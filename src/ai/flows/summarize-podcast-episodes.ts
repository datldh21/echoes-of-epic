'use server';

/**
 * @fileOverview Summarizes podcast episodes to provide users with a quick understanding of their content.
 *
 * - summarizePodcastEpisode - A function that takes podcast episode content as input and returns a concise summary.
 * - SummarizePodcastEpisodeInput - The input type for the summarizePodcastEpisode function.
 * - SummarizePodcastEpisodeOutput - The return type for the summarizePodcastEpisode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePodcastEpisodeInputSchema = z.object({
  episodeContent: z
    .string()
    .describe('The full text content of the podcast episode.'),
});
export type SummarizePodcastEpisodeInput = z.infer<typeof SummarizePodcastEpisodeInputSchema>;

const SummarizePodcastEpisodeOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the podcast episode, highlighting key topics and takeaways.'),
});
export type SummarizePodcastEpisodeOutput = z.infer<typeof SummarizePodcastEpisodeOutputSchema>;

export async function summarizePodcastEpisode(
  input: SummarizePodcastEpisodeInput
): Promise<SummarizePodcastEpisodeOutput> {
  return summarizePodcastEpisodeFlow(input);
}

const summarizePodcastEpisodePrompt = ai.definePrompt({
  name: 'summarizePodcastEpisodePrompt',
  input: {schema: SummarizePodcastEpisodeInputSchema},
  output: {schema: SummarizePodcastEpisodeOutputSchema},
  prompt: `Summarize the following podcast episode content in a concise paragraph, highlighting the main topics, key arguments, and overall takeaways.\n\nPodcast Episode Content:\n{{{episodeContent}}}`,
});

const summarizePodcastEpisodeFlow = ai.defineFlow(
  {
    name: 'summarizePodcastEpisodeFlow',
    inputSchema: SummarizePodcastEpisodeInputSchema,
    outputSchema: SummarizePodcastEpisodeOutputSchema,
  },
  async input => {
    const {output} = await summarizePodcastEpisodePrompt(input);
    return output!;
  }
);
