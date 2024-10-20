import { NextResponse } from 'next/server';
import { getDocuments } from '@/app/lib/getDocuments';
import { chunkText } from '@/app/lib/chunkText';
import { generateEmbedding } from '@/app/lib//generateEmbeddings';
import { indexDocuments } from '@/app/lib/indexDocuments';
export async function POST(request: Request) {
    try {
        const documents = await getDocuments();
        const indexedData = [];

        for (const doc of documents) {
            const chunks = chunkText(doc.content, 500);

            for (const [index, chunk] of chunks.entries()) {
                const embedding = await generateEmbedding(chunk);
                indexedData.push({
                    id: `${toUrlSafeBase64(doc.name)}-${index}`,
                    content: chunk,
                    embedding: embedding,
                });
            }
        }

        await indexDocuments(indexedData);

        return NextResponse.json({ message: 'Documents indexed successfully.' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to index documents.' }, { status: 500 });
    }
}

function toUrlSafeBase64(input: string) {
    return Buffer.from(input)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
