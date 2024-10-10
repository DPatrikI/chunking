export default {
    "@odata.type": "#Microsoft.Skills.Text.AzureOpenAIEmbeddingSkill",
    "name": "embeddingSkill",
    "description": "Generates embeddings for text chunks",
    "context": "/document/pages/*",
    "resourceUri": process.env.AZURE_OPENAI_KEY,
    "apiKey": process.env.AZURE_OPENAI_KEY,
    "deploymentId": "text-embedding-3-large",
    "dimensions": 3072,
    "modelName": "text-embedding-3-large",
    "inputs": [
        {
            "name": "text",
            "source": "/document/pages/*"
        }
    ],
    "outputs": [
        {
            "name": "embedding",
            "targetName": "embedding"
        }
    ],
    "authIdentity": null
}