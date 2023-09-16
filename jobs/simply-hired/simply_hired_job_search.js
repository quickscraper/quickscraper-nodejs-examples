const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "RHQlKDXUgekC2FSvLt3Js7rGh";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.simplyhired.co.uk/search?q=communications&job=kcDs6CIIgZBjL2ONaJjGP4w8ybcQ6Q8OWprqL8KmGwUyZ0hLErGwzg", {
            parserSubscriptionId: '5a2a045c-4fa5-5f9a-8941-d619df0f2e4a'
        });
        console.log(JSON.stringify(response.data));
    } catch (error) {
        console.log("error ", error);
    }
})();
