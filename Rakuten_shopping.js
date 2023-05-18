const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "fd6tagaGWUWRWWBe0wLcu6d7q";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://fr.shopping.rakuten.com/nav/Hifi_Television/f2/oled#xtatc=PUB-[fonc]-[Header]-[tv-image-son]-[television]-[tv-oled]-[]-[]", {
          parserSubscriptionId: 'a6d6632a-3a9c-5fe8-b7af-7b78b19ff6e9'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
