import { QuickScraper } from "quickscraper-sdk";
const QuickScraperClient = new QuickScraper();

const test = (async () => {
try {
  const ACCESS_TOKEN = "YLvVRa54d4wZuRwx9DtAy4SYH";
  QuickScraperClient.setAccessToken(ACCESS_TOKEN);
  const response = await QuickScraperClient.getHtml("https://twitter.com/elonmusk", {
    parserSubscriptionId: 'de41fb5b-9590-54de-b103-1aabd3e5d53e'
  });
  console.log(response.data);
} catch (error) {
  console.log("error ", error);
}
})
test();