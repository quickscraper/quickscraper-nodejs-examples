const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const requestUrl = "https://www.google.com/search?q=fullstacktechnology&oq=&aqs=chrome.0.35i39i362j46i39i175i199i362j35i39i362j46i39i175i199i362j35i39i362l4.956193j0j7&sourceid=chrome&ie=UTF-8";
        const ACCESS_TOKEN = "Ydoxi1VpPV9WdWVbRSBCgxmeo";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const options= {
			parserSubscriptionId: 'e56ace83-3a14-5c30-9fac-cacab19c0543'
		};
        const filePath = './Google_business_csv_parser.csv';
        const response = await QuickScraperClient.getCsvUsingParser(requestUrl, filePath, options);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
