const QuickScraper = require('quickscraper-sdk');
const fs = require('fs');
const path = require('path');
const test = (async () => {
	const QuickScraperClient = new QuickScraper();
	QuickScraperClient.setAccessToken('qaQqtggD5tauj3yRq6fNhS7cx');
	const response = await QuickScraperClient.getHtml('https://www.amazon.com', {
		render: false,
		submitType: 'local',
		customSelectors: [
			{
				"name": "waitForSelector",
				"selectorScript": "#search",
				"options": null,
				"isScript": false
			}
		],
		"keepSelection": true,
		"formData": {
			"formSelector": "#nav-search-bar-form",
			"submitButtonSelector": "#nav-search-submit-button",
			"formSelectorScript": "",
			"submitButtonSelectorScript": "",
			"formFields": [
				{
					"value": "Laptops",
					"selectorScript": "#twotabsearchtextbox",
					"isScript": false
				}
			]
		},
		"keepFormdataSelection": true
	});
	const filePath = path.join(__dirname, 'amazon-search-using-form-data.html');
	fs.writeFileSync(filePath, response.data)
});

test();