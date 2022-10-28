const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = '';
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const requestUrl = 'https://httpbin.org/cookies';
        const response = await QuickScraperClient.getHtml(requestUrl, {
            headers: {
                'Cookie': 'key1=value1;key2=value2;key3=value3;'
            },
            keep_headers: true
        });

        console.log(response);

    } catch (error) {
        console.log('error ', error);
    }
})();