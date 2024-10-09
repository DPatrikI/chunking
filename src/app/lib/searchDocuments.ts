import { SearchClient, AzureKeyCredential } from '@azure/search-documents';
import { generateEmbedding } from './generateEmbeddings';

const searchEndpoint = process.env.AZURE_SEARCH_ENDPOINT!;
const searchApiKey = process.env.AZURE_SEARCH_API_KEY!;
const indexName = process.env.AZURE_SEARCH_INDEX_NAME!;

const searchClient = new SearchClient(searchEndpoint, indexName, new AzureKeyCredential(searchApiKey));

export async function searchDocuments(query: string): Promise<any[]> {
    const embedding = await generateEmbedding(query);

    const results = await searchClient.search('', {
        vectorSearchOptions: {
            queries: [
                {
                    kind: 'vector',
                    vector: embedding,
                    fields: ['embedding'],
                    kNearestNeighborsCount: 3,
                }
            ]
        },
        select: ['content', 'embedding'],
    });

    const documents = [];
    for await (const result of results.results) {
        documents.push(result.document);
    }

    return documents;
}