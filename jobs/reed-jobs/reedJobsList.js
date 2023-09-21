const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
	try {
		const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
		QuickScraperClient.setAccessToken(ACCESS_TOKEN);
		const response = await QuickScraperClient.getData("https://www.reed.co.uk/jobs/accountancy-jobs?perm=true&direct=true", {
			parserSubscriptionId: 'f79a7921-84ec-5071-96ab-bbb834070991'
		});
		console.log(JSON.stringify(response.data));
	} catch (error) {
		console.log("error ", error);
	}
})();
