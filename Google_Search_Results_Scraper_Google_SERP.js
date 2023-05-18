const QuickScraper = require('quickscraper-sdk');
const QuickScraperClient = new QuickScraper();

(async () => {
    try {
        const ACCESS_TOKEN = "fd6tagaGWUWRWWBe0wLcu6d7q";
        QuickScraperClient.setAccessToken(ACCESS_TOKEN);
        const response = await QuickScraperClient.getData("https://www.google.com/search?q=iphone14&sxsrf=AJOqlzXqB-DoqckIAXlxx31ZbGcT-9YzAw:1674543020151&source=hp&ei=rH_PY9__BpueseMPpfqQ-A4&iflsig=AK50M_UAAAAAY8-NvKCUpRxL46xifgMVPNXFMxJ5JS_6&ved=0ahUKEwjfhYDvzt_8AhUbT2wGHSU9BO8Q4dUDCAg&uact=5&oq=iphone14&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyEwguEIAEELEDEIMBEOUEENQCEAoyCgguEIAEEOUEEAoyEwguEIMBENQCELEDEIAEEOUEEAoyCggAEIAEEMkDEAoyEwguEIMBENQCELEDEIAEEOUEEAoyBwgAEIAEEAoyBwgAEIAEEAoyBwgAEIAEEAoyBwgAEIAEEAo6BwgjEOoCECc6BQgAEJECOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CwguEIMBELEDEIAEOgUIABCABDoNCC4QgwEQsQMQ5QQQQzoKCC4QsQMQ5QQQQzoNCC4QsQMQgwEQ5QQQQzoKCC4QsQMQgwEQQzoHCC4Q5QQQQzoECAAQQzoKCC4Q5QQQ1AIQQzoNCC4QgAQQsQMQ5QQQCjoNCC4QsQMQgAQQ5QQQCjoNCAAQgAQQsQMQgwEQCjoNCC4QgAQQ5QQQ1AIQClD6CVipHWDiHmgBcAB4AIABuQGIAYALkgEDMC44mAEAoAEBsAEK&sclient=gws-wizy", {
          parserSubscriptionId: '44bd1b6f-9c38-514c-b341-a47b58ac27cb'
        });
        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.log("error ", error);
      }
})();
