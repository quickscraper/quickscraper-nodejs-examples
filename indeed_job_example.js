const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "YLvVRa54d4wZuRwx9DtAy4SYH";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.indeed.com/q-USA-jobs.html", {
          parserSubscriptionId: '9998167e-2d42-5396-9018-0bd35e60e08c'
        });
        console.log(JSON.stringify(response.data,null,2));
      } catch (error) {
        console.log("error ", error);
      }
})();