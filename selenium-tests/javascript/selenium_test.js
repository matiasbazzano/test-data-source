const { Builder, By, until } = require('selenium-webdriver');

(async function addToCart() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.saucedemo.com/');
        
        await driver.findElement(By.id('user-name')).sendKeys('standard_user');
        await driver.findElement(By.id('password')).sendKeys('secret_sauce');
        await driver.findElement(By.id('login-button')).click();

        await driver.wait(until.elementLocated(By.className('inventory_item')), 5000);
        await driver.findElement(By.css('.btn_inventory')).click();
        
        let cartCount = await driver.findElement(By.className('shopping_cart_badge')).getText();
        console.log(`Productos en el carrito: ${cartCount}`);

    } finally {
        await driver.quit();
    }
})();
