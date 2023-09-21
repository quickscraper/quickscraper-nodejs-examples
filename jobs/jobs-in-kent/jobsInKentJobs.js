const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();
(async () => {
	try {
		const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
		QuickScraperClient.setAccessToken(ACCESS_TOKEN);
		const response = await QuickScraperClient.getData("https://jobsinkent.com/search?t=b&o=date", {
			parserSubscriptionId: '824d29e2-9ecb-5a2d-bc90-01b24dd08d79'
		});
		console.log(JSON.stringify(response.data));
	}
	catch (error) {
		console.log("error ", error);
	}
})();