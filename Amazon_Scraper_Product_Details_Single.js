const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "fd6tagaGWUWRWWBe0wLcu6d7q";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.amazon.com/Nintendo-Graphic-Black-Traditional-Metroid/dp/B0765G7D52/ref=sr_1_13?keywords=gaming+apparel&th=1", {
          parserSubscriptionId: 'e65296a6-1849-5858-8564-5dc16472db89'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
