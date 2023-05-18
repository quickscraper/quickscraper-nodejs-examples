const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "fd6tagaGWUWRWWBe0wLcu6d7q";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.google.com/search?q=xsquare+technology&sxsrf=APwXEde8-I98gelOMslv7Qp9GgYlbISOHA:1684307559541&ei=Z35kZNPWIJWb4-EPsLSyqAo&oq=x&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMhAIIxCKBRAnEIsDEKgDEKYDMhcILhCvARDHARCKBRCRAhCLAxCoAxCmAzIOCAAQgAQQsQMQgwEQiwMyCwgAEIAEELEDEIsDMhQILhCABBCxAxCDARCLAxCoAxCYAzIOCAAQgAQQsQMQgwEQiwMyFwguEIAEELEDEIMBEIsDEKgDEJoDEJgDMgsIABCABBCxAxCLAzIOCAAQgAQQsQMQgwEQiwMyCAgAEIAEEIsDOgoIABBHENYEELADOhAILhCKBRDHARCvARCwAxBDOg0ILhCvARDHARDqAhAnOgcIIxDqAhAnOg0ILhDHARCvARDqAhAnOg8IABADEI8BEOoCELQCGAE6JQguEK8BEMcBEIoFEJECEIsDEKgDEKYDEJcFENwEEN4EEOAEGAJKBAhBGABQtgZY6hlgyyRoAnABeAGAAdkBiAHSCZIBBTAuNi4xmAEAoAEBsAEUyAEJuAEDwAEB2gEGCAEQARgK2gEGCAIQARgU&sclient=gws-wiz-serp", {
          parserSubscriptionId: 'f5c08085-894a-5f3f-9b1e-e455730d6e3c'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
