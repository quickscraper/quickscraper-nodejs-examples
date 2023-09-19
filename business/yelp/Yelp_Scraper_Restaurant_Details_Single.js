const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "fd6tagaGWUWRWWBe0wLcu6d7q";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.yelp.com/biz/ben-tre-vietnamese-homestyle-cuisine-south-san-francisco?osq=Restaurants", {
          parserSubscriptionId: 'b8481b16-a5be-53ce-b5ee-361e90380ab7'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
