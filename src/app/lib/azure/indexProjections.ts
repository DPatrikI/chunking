export default {
    "selectors": [
        {
            "targetIndexName": "document-embedding-index",
            "parentKeyFieldName": "parent_id",
            "sourceContext": "/document/pages/*",
            "mappings": [
                {
                    "name": "chunk",
                    "source": "/document/pages/*",
                    "sourceContext": null,
                    "inputs": []
                },
                {
                    "name": "embedding",
                    "source": "/document/pages/*/embedding",
                    "sourceContext": null,
                    "inputs": []
                },
                {
                    "name": "locations",
                    "source": "/document/pages/*/locations",
                    "sourceContext": null,
                    "inputs": []
                },
                {
                    "name": "title",
                    "source": "/document/metadata_storage_name",
                    "sourceContext": null,
                    "inputs": []
                }
            ]
        }
    ],
    "parameters": {
        "projectionMode": "skipIndexingParentDocuments"
    }
}