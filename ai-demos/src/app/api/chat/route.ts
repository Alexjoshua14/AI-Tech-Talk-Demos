import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow responses up to 5 minutes
export const maxDuration = 300;

export async function POST(req: Request) {
  console.log("Message recieved!")
  const { messages } = await req.json();

  const result = streamText({
    model: openai('o1-mini'),
    messages,
  });

  return result.toDataStreamResponse();
}