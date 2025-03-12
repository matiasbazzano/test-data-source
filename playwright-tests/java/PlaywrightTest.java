package playwright-tests.java;

public import com.microsoft.playwright.*;

public class PlaywrightTest {
    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false));
            Page page = browser.newPage();

            page.navigate("https://example.com/register");

            page.fill("#username", "testuser");
            page.fill("#email", "testuser@example.com");
            page.fill("#password", "securepassword");
            page.click("button[type='submit']");

            String message = page.textContent("#confirmation");
            System.out.println("Mensaje de confirmación: " + message);

            browser.close();
        }
    }
}
 {
    
}
