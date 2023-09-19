const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const requestUrl = "https://www.yelp.com/search?find_desc=Restaurants&find_loc=New+Canada,+Nova+Scotia,+Canada";
        const ACCESS_TOKEN = "Ydoxi1VpPV9WdWVbRSBCgxmeo";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const options= {
			parserSubscriptionId: 'f192b26f-33f6-5d83-bfd1-bf8f36449a4e'
		};
        const filePath = './Yelp_Scraper_Search_Restaurant_List.csv';
        const response = await QuickScraperClient.getCsvUsingParser(requestUrl, filePath, options);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
