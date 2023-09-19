const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "fd6tagaGWUWRWWBe0wLcu6d7q";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.yellowpages.com/los-angeles-ca/mip/palermo-ristorante-italiano-540709640?lid=1001234798248", {
          parserSubscriptionId: '39b8f5dc-a2eb-5a02-9764-be51aac7eee6'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
