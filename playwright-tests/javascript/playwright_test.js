const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.wikipedia.org/');
    await page.click('text=English');
    await page.waitForURL('https://en.wikipedia.org/wiki/Main_Page');

    const title = await page.title();
    console.log(`Página actual: ${title}`);

    await browser.close();
})();
