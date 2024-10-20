import { BlobServiceClient } from '@azure/storage-blob';

const blobServiceClient = BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING!);
const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME!;

export async function getDocuments(): Promise<{ name: string; content: string }[]> {
    const containerClient = blobServiceClient.getContainerClient(containerName);
    const documents = [];

    for await (const blob of containerClient.listBlobsFlat()) {
        const blobClient = containerClient.getBlobClient(blob.name);
        const downloadBlockBlobResponse = await blobClient.download(0);
        const downloaded = await streamToString(downloadBlockBlobResponse.readableStreamBody!);
        documents.push({ name: blob.name, content: downloaded });
    }

    return documents;
}

async function streamToString(readableStream: NodeJS.ReadableStream): Promise<string> {
    return new Promise((resolve, reject) => {
        const chunks: Buffer[] = [];
        readableStream.on('data', (data: Buffer) => {
            chunks.push(data);
        });
        readableStream.on('end', () => {
            resolve(Buffer.concat(chunks).toString('utf8'));
        });
        readableStream.on('error', reject);
    });
}