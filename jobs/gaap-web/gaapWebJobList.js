const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
	try {
		const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
		QuickScraperClient.setAccessToken(ACCESS_TOKEN);
		const response = await QuickScraperClient.getData("https://www.gaapweb.com/jobs/direct-employer/#browsing", {
			parserSubscriptionId: 'a5232dce-e06a-5548-8ed3-7e19bded88b8'
		});
		console.log(JSON.stringify(response.data));
	} catch (error) {
		console.log("error ", error);
	}
})();
