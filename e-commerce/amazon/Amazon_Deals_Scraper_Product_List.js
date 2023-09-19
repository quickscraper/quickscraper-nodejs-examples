const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "fd6tagaGWUWRWWBe0wLcu6d7q";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.amazon.es/deals", {
          parserSubscriptionId: '51e384a4-c7d1-5521-8628-66c67dc4a949'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
