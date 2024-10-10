export const fields = [
    {
        "name": "chunk_id",
        "type": "Edm.String",
        "searchable": true,
        "filterable": true,
        "retrievable": true,
        "stored": true,
        "sortable": true,
        "facetable": true,
        "key": true,
        "indexAnalyzer": null,
        "searchAnalyzer": null,
        "analyzer": "keyword",
        "normalizer": null,
        "dimensions": null,
        "vectorSearchProfile": null,
        "vectorEncoding": null,
        "synonymMaps": []
    },
    {
        "name": "title",
        "type": "Edm.String",
        "searchable": false,
        "filterable": false,
        "retrievable": true,
        "stored": true,
        "sortable": false,
        "facetable": false,
        "key": false,
        "indexAnalyzer": null,
        "searchAnalyzer": null,
        "analyzer": null,
        "normalizer": null,
        "dimensions": null,
        "vectorSearchProfile": null,
        "vectorEncoding": null,
        "synonymMaps": []
    },
    {
        "name": "locations",
        "type": "Collection(Edm.String)",
        "searchable": false,
        "filterable": true,
        "retrievable": true,
        "stored": true,
        "sortable": false,
        "facetable": false,
        "key": false,
        "indexAnalyzer": null,
        "searchAnalyzer": null,
        "analyzer": null,
        "normalizer": null,
        "dimensions": null,
        "vectorSearchProfile": null,
        "vectorEncoding": null,
        "synonymMaps": []
    },
    {
        "name": "chunk",
        "type": "Edm.String",
        "searchable": false,
        "filterable": false,
        "retrievable": true,
        "stored": true,
        "sortable": false,
        "facetable": false,
        "key": false,
        "indexAnalyzer": null,
        "searchAnalyzer": null,
        "analyzer": null,
        "normalizer": null,
        "dimensions": null,
        "vectorSearchProfile": null,
        "vectorEncoding": null,
        "synonymMaps": []
    },
    {
        "name": "embedding",
        "type": "Collection(Edm.Single)",
        "searchable": true,
        "filterable": false,
        "retrievable": true,
        "stored": true,
        "sortable": false,
        "facetable": false,
        "key": false,
        "indexAnalyzer": null,
        "searchAnalyzer": null,
        "analyzer": null,
        "normalizer": null,
        "dimensions": 3072,
        "vectorSearchProfile": "vector-profile-1728592278413",
        "vectorEncoding": null,
        "synonymMaps": []
    },
    {
        "name": "parent_id",
        "type": "Edm.String",
        "searchable": false,
        "filterable": true,
        "retrievable": true,
        "stored": true,
        "sortable": false,
        "facetable": false,
        "key": false,
        "indexAnalyzer": null,
        "searchAnalyzer": null,
        "analyzer": null,
        "normalizer": null,
        "dimensions": null,
        "vectorSearchProfile": null,
        "vectorEncoding": null,
        "synonymMaps": []
    }
]

export const vectorSearch = {
    "algorithms": [
        {
            "name": "vector-config-1728592302063",
            "kind": "hnsw",
            "hnswParameters": {
                "metric": "cosine",
                "m": 4,
                "efConstruction": 400,
                "efSearch": 500
            },
            "exhaustiveKnnParameters": null
        }
    ],
    "profiles": [
        {
            "name": "vector-profile-1728592278413",
            "algorithm": "vector-config-1728592302063",
            "vectorizer": "vectorizer-1728592313507",
            "compression": null
        }
    ],
    "vectorizers": [
        {
            "name": "vectorizer-1728592313507",
            "kind": "azureOpenAI",
            "azureOpenAIParameters": {
                "resourceUri": "https://em-datachunking-challenge.openai.azure.com",
                "deploymentId": "text-embedding-3-large",
                "apiKey": process.env.AZURE_OPENAI_KEY,
                "modelName": "text-embedding-3-large",
                "authIdentity": null
            },
            "customWebApiParameters": null,
            "aiServicesVisionParameters": null,
            "amlParameters": null
        }
    ],
    "compressions": []
}

