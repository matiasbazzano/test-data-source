import { chromium } from "playwright";

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto("https://www.w3schools.com/html/html_tables.asp");

    const rowData = await page.locator("#customers tr:nth-child(3)").innerText();
    console.log(`Datos de la fila 3: ${rowData}`);

    await browser.close();
})();
