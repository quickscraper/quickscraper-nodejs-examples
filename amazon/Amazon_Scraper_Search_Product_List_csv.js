const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const requestUrl = "https://www.amazon.com/s?k=samsung+mobiles&crid=25QX83X6AHZP6&sprefix=samsung+mobile,aps,314&ref=nb_sb_noss_1";
        const ACCESS_TOKEN = "Ydoxi1VpPV9WdWVbRSBCgxmeo";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const options= {
			parserSubscriptionId: '58086068-ce36-5900-a5d4-964ab0992f84'
		};
        const filePath = './Amazon_Scraper_Search_Product_List.csv';
        const response = await QuickScraperClient.getCsvUsingParser(requestUrl, filePath, options);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
