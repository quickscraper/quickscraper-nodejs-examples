const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "YLvVRa54d4wZuRwx9DtAy4SYH";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://twitter.com/BillGates", {
          parserSubscriptionId: 'de41fb5b-9590-54de-b103-1aabd3e5d53e'
        });
        console.log(response.data);
      } catch (error) {
        console.log("error ", error);
      }
})();
