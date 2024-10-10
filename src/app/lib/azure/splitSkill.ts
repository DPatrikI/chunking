export default {
    "@odata.type": "#Microsoft.Skills.Text.SplitSkill",
    "name": "splitSkill",
    "description": "Splits text into chunks for embedding",
    "context": "/document",
    "defaultLanguageCode": "en",
    "textSplitMode": "pages",
    "maximumPageLength": 2000,
    "pageOverlapLength": 500,
    "maximumPagesToTake": 0,
    "unit": "characters",
    "inputs": [
        {
            "name": "text",
            "source": "/document/content"
        }
    ],
    "outputs": [
        {
            "name": "textItems",
            "targetName": "pages"
        }
    ],
    "azureOpenAITokenizerParameters": null
}