const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
	try {
		const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
		QuickScraperClient.setAccessToken(ACCESS_TOKEN);
		const response = await QuickScraperClient.getData("https://www.cv-library.co.uk/accountancy-jobs?permanent=true&order=date&posted=1", {
			parserSubscriptionId: '19d7309b-1026-5755-8055-b7a7fabc94c6'
		});
		console.log(JSON.stringify(response.data));
	} catch (error) {
		console.log("error ", error);
	}
})();
