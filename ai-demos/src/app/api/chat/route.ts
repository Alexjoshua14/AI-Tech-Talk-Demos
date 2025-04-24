import { openai } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { z } from 'zod';

// Allow responses up to 5 minutes
export const maxDuration = 300;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4.1-nano'),
    messages,
    maxSteps: 5,
    tools: {
      generateColorPalette: tool({
        description: 'Generate a color palette for a given theme',
        parameters: z.object({
          theme:
            z.string()
              .max(40)
              .describe("The mood, style, or use case to inspire the color palette")
        }),
        execute: async ({ theme }) => ({
          theme,
          colors: ['#A8DADC', '#457B9D', '#1D3557', '#F1FAEE', '#E63946']
        })
      })
    }
  });

  return result.toDataStreamResponse();
}
