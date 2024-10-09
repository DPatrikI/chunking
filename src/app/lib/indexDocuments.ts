import { SearchClient, AzureKeyCredential } from '@azure/search-documents';

const searchEndpoint = process.env.AZURE_SEARCH_ENDPOINT!;
const searchApiKey = process.env.AZURE_SEARCH_API_KEY!;
const indexName = process.env.AZURE_SEARCH_INDEX_NAME!;

const searchClient = new SearchClient(searchEndpoint, indexName, new AzureKeyCredential(searchApiKey));

export async function indexDocuments(documents: any[]) {
  const indexDocumentsResult = await searchClient.uploadDocuments(documents);
}