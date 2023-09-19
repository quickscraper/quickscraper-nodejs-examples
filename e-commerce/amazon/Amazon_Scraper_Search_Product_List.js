const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "fd6tagaGWUWRWWBe0wLcu6d7q";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.amazon.com/s?k=laptop&crid=HDIIDEUVSGCQ&sprefix=lap,aps,1548&ref=nb_sb_noss_2", {
          parserSubscriptionId: '838454ea-8c8d-528c-935b-566939c616b5'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
