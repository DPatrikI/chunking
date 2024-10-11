🌟 Integrated Data Chunking and Embedding with Azure AI Search

Welcome to the Integrated Data Chunking and Embedding project! Enhance your document processing and search capabilities using Azure AI Search and OpenAI embeddings. 🎉

🎈 Features

	•	Semantic Data Chunking: 📄 Intelligently split documents while preserving context.
	•	Embeddings Generation: 🧠 Convert text chunks into 3072 dimensional embeddings using OpenAI’s text-embedding-3-large model.
	•	Advanced Search and Retrieval: 🔍 Efficiently index and search vectorized data with Azure AI Search.

🚀 Getting Started

Skills used

	•	Entity Recognition Skill
	•	Azure OpenAI Embedding Skill
	•	Text Split Skill

Prerequisites

	•	Node.js
	•	npm or yarn
	•	Azure Services: Azure AI Search, Azure Blob Storage, Azure OpenAI Service
	•	OpenAI API Access

Environment Variables

You'll need these variables in your .env.local:

	•	OPENAI_API_KEY=your-openai-api-key
	•	AZURE_OPENAI_KEY=your-azure-openai-api-key
	•	AZURE_STORAGE_CONNECTION_STRING=your-storage-connection-string
	•	AZURE_OPENAI_ENDPOINT=your-azure-openai-endpoint
	•	OPENAI_API_VERSION="2023-05-15"
 	•	AZURE_SEARCH_ENDPOINT=your-azure-search-endpoint
	•	AZURE_SEARCH_INDEX_NAME="document-embedding-index"
	•	AZURE_SEARCH_API_KEY=your-azure-search-api-key
	•	AZURE_STORAGE_CONTAINER_NAME="documents"

## Reflections 🤔

- Which aspect of the project was most rewarding or challenging?

	•	Configuring the indexer and the skillsets on Azure.

- What insights or improvements did you discover during implementation?

	•	I got familiar with the debugging tool for the indexer, which helped greatly in identifying bugs.

- If given more time, what additional features would you consider adding?

	•	Image recognition, handwriting recognition, and just overall make the app more robust.

📝 License

This project is licensed under the MIT License.
