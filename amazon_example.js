const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();
const cheerio = require('cheerio');

(async () => {
    try {
        const ACCESS_TOKEN = '';
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const requestUrl = 'https://www.amazon.com/dp/B08QMB94YW';
        const response = await QuickScraperClient.getHtml(requestUrl);

        // Manipulate your response here using cheerio
        let $ = cheerio.load(response.data);

        const productDetails = {
            product_name: $('span#productTitle').text(),
            product_price: $('#corePriceDisplay_desktop_feature_div .a-offscreen').text(),
            product_image: $('#imgTagWrapperId > img').attr('src'),
            product_asin: $('#productDetails_detailBullets_sections1 .prodDetAttrValue').first().text(),
            product_brand: $('.po-brand > .a-span9 > span').text()
        };

        console.log(productDetails);

    } catch (error) {
        console.log('error ', error);
    }
})();