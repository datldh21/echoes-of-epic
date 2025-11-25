'use server';

/**
 * @fileOverview Converts text to speech using a Genkit flow.
 *
 * - generatePodcastAudio - A function that takes a string and returns a WAV audio data URI.
 * - GeneratePodcastAudioInput - The input type for the generatePodcastAudio function.
 * - GeneratePodcastAudioOutput - The return type for the generatePodcastAudio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const GeneratePodcastAudioInputSchema = z.object({
  text: z.string().describe('The text to convert to speech.'),
});
export type GeneratePodcastAudioInput = z.infer<
  typeof GeneratePodcastAudioInputSchema
>;

const GeneratePodcastAudioOutputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The generated audio as a data URI in WAV format. Expected format: 'data:audio/wav;base64,<encoded_data>'."
    ),
});
export type GeneratePodcastAudioOutput = z.infer<
  typeof GeneratePodcastAudioOutputSchema
>;

export async function generatePodcastAudio(
  input: GeneratePodcastAudioInput
): Promise<GeneratePodcastAudioOutput> {
  return generatePodcastAudioFlow(input);
}

const generatePodcastAudioFlow = ai.defineFlow(
  {
    name: 'generatePodcastAudioFlow',
    inputSchema: GeneratePodcastAudioInputSchema,
    outputSchema: GeneratePodcastAudioOutputSchema,
  },
  async ({text}) => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {voiceName: 'Algenib'},
          },
        },
      },
      prompt: text,
    });

    if (!media || !media.url) {
      throw new Error('No audio was generated.');
    }

    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    const wavData = await toWav(audioBuffer);
    const audioDataUri = 'data:audio/wav;base64,' + wavData;

    return {audioDataUri};
  }
);

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}
