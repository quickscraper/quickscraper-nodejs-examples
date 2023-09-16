const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.glassdoor.co.uk/Job/london-jobs-SRCH_IL.0,6_IC2671300.htm", {
          parserSubscriptionId: '6ffbf0a9-66fd-560a-b04e-c8351a807075'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
