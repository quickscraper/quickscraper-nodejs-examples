const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://jobitt.com/job-openings/engineering-manager-globallogic-bangalore-irc149078", {
          parserSubscriptionId: 'baf912c0-7698-5f02-a913-5d309d103ae9'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
