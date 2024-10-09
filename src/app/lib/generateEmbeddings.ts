import { AzureOpenAI } from "openai";

const client = new AzureOpenAI({
  apiKey: process.env.AZURE_OPENAI_KEY,
  apiVersion: process.env.OPENAI_API_VERSION,
  endpoint: process.env.AZURE_OPENAI_ENDPOINT,
  deployment: 'text-embedding-3-large'
})

export async function generateEmbedding(text: string): Promise<number[]> {
  const result = await client.embeddings.create({
    input: text,
    model: 'text-embedding-3-large'
  })
  return result.data[0].embedding;
}