import { Builder, By, WebDriver } from "selenium-webdriver";

async function fillContactForm() {
    let driver: WebDriver = await new Builder().forBrowser("chrome").build();
    
    try {
        await driver.get("https://example.com/contact");

        await driver.findElement(By.name("name")).sendKeys("John Doe");
        await driver.findElement(By.name("email")).sendKeys("johndoe@example.com");
        await driver.findElement(By.name("message")).sendKeys("Hello, this is a test message!");
        await driver.findElement(By.css("button[type='submit']")).click();

        let confirmation = await driver.findElement(By.id("confirmation")).getText();
        console.log(`Mensaje de confirmación: ${confirmation}`);

    } finally {
        await driver.quit();
    }
}

fillContactForm();
