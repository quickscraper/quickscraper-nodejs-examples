const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "fd6tagaGWUWRWWBe0wLcu6d7q";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://instagram.com/cristiano/", {
          parserSubscriptionId: '3e4271e3-e512-5e0f-b1f5-dbe77dc85470'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
