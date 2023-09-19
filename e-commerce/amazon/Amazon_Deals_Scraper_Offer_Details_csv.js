const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const requestUrl = "https://www.amazon.es/deal/3ef1498f?showVariations=true&pf_rd_r=KH7SCR70J6JYN9C81ZN7&pf_rd_t=Events&pf_rd_i=deals&pf_rd_p=4fbc9b5b-e8a7-42b0-b9b7-4b4a4594b0db&pf_rd_s=slot-17&ref=dlx_deals_gd_dcl_tlt_1_3ef1498f_dt_sl17_db";
        const ACCESS_TOKEN = "Ydoxi1VpPV9WdWVbRSBCgxmeo";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const options= {
			parserSubscriptionId: '4c6f7a0a-22be-5ad2-8f5a-962e04b58c2a'
		};
        const filePath = './Amazon_Deals_Scraper_Offer_Details.csv';
        const response = await QuickScraperClient.getCsvUsingParser(requestUrl, filePath, options);
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
