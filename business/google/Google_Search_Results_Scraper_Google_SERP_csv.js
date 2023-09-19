const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const requestUrl = "https://www.google.com/search?q=laptop&oq=laptop&aqs=chrome.0.69i59j0i433i512j0i131i433i512j0i433i512l2j69i61j69i60l2.1322j0j7&sourceid=chrome&ie=UTF-8";
        const ACCESS_TOKEN = "Ydoxi1VpPV9WdWVbRSBCgxmeo";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const options= {
			parserSubscriptionId: '301dc7b6-b93b-5283-9ec4-ad4c427aa1f2'
		};
        const filePath = './Google_Search_Results_Scraper_Google_SERP.csv';
        const response = await QuickScraperClient.getCsvUsingParser(requestUrl, filePath, options);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
