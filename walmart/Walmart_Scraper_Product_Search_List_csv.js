const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const requestUrl = "https://www.walmart.com/browse/iphone-13/0/0/?_be_shelf_id=7517945&_refineresult=true&facet=shelf_id:7517945&redirectQuery=iPhone+13&search_redirect=true&search_sort=100";
        const ACCESS_TOKEN = "Ydoxi1VpPV9WdWVbRSBCgxmeo";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const options= {
			parserSubscriptionId: '436859ca-a9a1-5fe7-a980-397a9560e0a3'
		};
        const filePath = './Walmart_Scraper_Product_Search_List.csv';
        const response = await QuickScraperClient.getCsvUsingParser(requestUrl, filePath, options);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
