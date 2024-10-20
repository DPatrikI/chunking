export default {
    "@odata.type": "#Microsoft.Skills.Text.V3.EntityRecognitionSkill",
    "name": "#3",
    "description": "Skill to recognize entities in text",
    "context": "/document/pages/*",
    "categories": [
        "Location"
    ],
    "defaultLanguageCode": "en",
    "minimumPrecision": 0,
    "modelVersion": null,
    "inputs": [
        {
            "name": "text",
            "source": "/document/pages/*"
        }
    ],
    "outputs": [
        {
            "name": "locations",
            "targetName": "locations"
        }
    ]
}