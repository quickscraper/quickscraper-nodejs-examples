const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = '';
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const requestUrl = 'https://www.amazon.com/dp/B08QMB94YW';
        const response = await QuickScraperClient.getHtml(requestUrl);

    } catch (error) {
        console.log('error ', error);
    }
})();