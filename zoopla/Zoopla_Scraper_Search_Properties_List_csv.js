const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const requestUrl = "https://www.zoopla.co.uk/for-sale/property/oxford/?search_source=for-sale&q=Oxford, Oxfordshire&chain_free=true&results_sort=newest_listings#listing_64140072";
        const ACCESS_TOKEN = "Ydoxi1VpPV9WdWVbRSBCgxmeo";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const options= {
			parserSubscriptionId: '90049940-26a8-5540-bd45-5188e850a1dc'
		};
        const filePath = './Zoopla_Scraper_Search_Properties_List.csv';
        const response = await QuickScraperClient.getCsvUsingParser(requestUrl, filePath, options);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
