const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.monster.co.uk/jobs/q-part-time-jobs?so=p.h.p", {
            parserSubscriptionId: '706010f0-6d27-5f60-9e98-a7c026555f63'
        });
        console.log(JSON.stringify(response.data));
    } catch (error) {
        console.log("error ", error);
    }
})();
