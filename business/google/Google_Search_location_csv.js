const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const requestUrl = "https://www.google.com/maps/search/school/@23.1806644,72.6035249,14z/data=!3m1!4b1?entry=ttu";
        const ACCESS_TOKEN = "Ydoxi1VpPV9WdWVbRSBCgxmeo";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const options= {
			parserSubscriptionId: '2e39e1ae-a3f1-52b4-8f79-ac049e036432'
		};
        const filePath = './Google_Search_location.csv';
        const response = await QuickScraperClient.getCsvUsingParser(requestUrl, filePath, options);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
